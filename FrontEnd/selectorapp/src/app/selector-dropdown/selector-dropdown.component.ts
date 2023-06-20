import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { selectorListDto } from '../selectorListDto';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";

interface selectorDto {
  id?: number,
  name?: string,
  parentId?: number,
  children?: selectorDto[]
}

@Component({
  selector: 'app-selector-dropdown',
  templateUrl: './selector-dropdown.component.html',
  styleUrls: ['./selector-dropdown.component.css'],
  providers: [ ConfigService ]

})


export class SelectorDropdownComponent {
  treeControl = 
    new NestedTreeControl<selectorDto>(node => node.children);
  dataSource = new MatTreeNestedDataSource<selectorDto>();
 
  constructor(private configService: ConfigService) {
    this.getSelectors()
  }

  hasChild = (_: number, node: selectorDto) =>
    !!node.children && node.children.length > 0;



  getSelectors() {
    this.configService.getSelectors()
      .subscribe((data: selectorListDto) => {
        this.dataSource.data = data.results;
        console.log(this.dataSource.data);
      });
  }
}

