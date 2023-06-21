import { Component } from '@angular/core';
import { userDto } from '../userDto';
import { ConfigService } from '../config/config.service';
import { selectorListDto } from '../selectorListDto';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NgForm } from '@angular/forms';
import { selectorDto } from '../selectorDto';

@Component({
  selector: 'app-selector-form',
  templateUrl: './selector-form.component.html',
  styleUrls: ['./selector-form.component.css'],
  providers: [ ConfigService ]
})
export class SelectorFormComponent {

  model = new userDto();

  userId = 0;

  treeControl = 
    new NestedTreeControl<selectorDto>(node => node.children);
  dataSource = new MatTreeNestedDataSource<selectorDto>();  

  saveButtonText = "Save";
 
  constructor(private configService: ConfigService) {
    this.getSelectors()
  }

  hasChild = (_: number, node: selectorDto) =>
    !!node.children && node.children.length > 0;

  getSelectors() {
    this.configService.getSelectors()
      .subscribe((data: selectorListDto) => {
        this.dataSource.data = data.results;
      });
  }

  submit(formDto: NgForm){
    
    let result = this.dataSource.data.reduce(
    (acc: number[], node: selectorDto) => 
      acc.concat(this.treeControl
                  .getDescendants(node)
                  .filter(descendant => descendant.selected)
                  .map(descendant => descendant.id))
    , [] as number[]);
    let formData = formDto.value;
    let dto = {
      id: 0,
      name: formData.name,
      selectors: result,
      agreeTermsConditions: formData.agreeTermsConditions
    };
    if(this.validateUser(dto)){
      if(this.userId == 0){
            this.configService.addUser(dto)
                  .subscribe((data: userDto) => {
                    this.userId = data.id! ;
                  });
            this.saveButtonText = "Save Changes";    
          }else{
            dto.id = this.userId;
            this.configService.updateUser(dto)
            .subscribe((data: userDto) => {
            });
          }
    }  
  }

  showCreateNew(){
    if(this.userId > 0){
      return true
    }
    return false
  }

  private validateUser(user: userDto){
    if(user.name === undefined){
      alert("Name field is mandatory!")
      return false;
    }

    if(typeof user.name === 'string' && user.name.trim().length === 0){
          alert("Name too short!");
          return false;
        }

    if(user.selectors === undefined || user.selectors.length === 0){
      alert("You must select at least one selector!")
      return false;
    }

    if(user.agreeTermsConditions === undefined || user.agreeTermsConditions === false){
      alert("Please check the agreement box!")
      return false;
    }

    return true;
  }

  public itemToggle(checked: boolean, node: selectorDto) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach(child => {
        this.itemToggle(checked, child);
      });
    }
  }
  
  public resetId(){
    this.userId = 0;
    this.saveButtonText = "Save";
  }

}
