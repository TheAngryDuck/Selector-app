import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { selectorListDto } from '../selectorListDto';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";

interface selectorDto {
  id?: number;
  name: string;
  parentId?: number;
  children?: selectorDto[];
  selected?: boolean;
  indeterminate?: boolean;
  parent?: selectorDto | null;
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
  private selectedSelectors: selectorDto[] = [];
 
  constructor(private configService: ConfigService) {
    this.getSelectors()
  }

  hasChild = (_: number, node: selectorDto) =>
    !!node.children && node.children.length > 0;

  private setParent(node: selectorDto, parent: selectorDto | null) {
    node.parent = parent;
    if (node.children) {
      node.children.forEach(childNode => {
        this.setParent(childNode, node);
    });
  }
  }

  getSelectors() {
    this.configService.getSelectors()
      .subscribe((data: selectorListDto) => {
        this.dataSource.data = data.results;
        Object.keys(this.dataSource.data).forEach(key => {
          this.setParent(this.dataSource.data[key], null);
        });
      });
  }

  private checkAllParents(node: selectorDto) {
    if (node.parent) {
      const descendants = this.treeControl.getDescendants(node.parent);
      node.parent.selected = 
        descendants.every(child => child.selected);
      node.parent.indeterminate = 
        descendants.some(child => child.selected);
      this.checkAllParents(node.parent);
    }
  }

  public itemToggle(checked: boolean, node: selectorDto) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach(child => {
        this.itemToggle(checked, child);
      });
    }
    this.checkAllParents(node);
  }
}

