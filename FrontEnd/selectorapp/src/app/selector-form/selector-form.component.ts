import { Component, OnInit } from '@angular/core';
import { userDto } from '../userDto';

@Component({
  selector: 'app-selector-form',
  templateUrl: './selector-form.component.html',
  styleUrls: ['./selector-form.component.css']
})
export class SelectorFormComponent {

  data = [];
  model = new userDto();

  submit(userDto: any){

    console.log("Form Submitted !",userDto)

  }
}
