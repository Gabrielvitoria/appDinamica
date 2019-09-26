
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-component',
  templateUrl: 'dynamic.componet.html',
})
export default class DynamicComponent {
  public dados: any;
  constructor(private http: HttpClient) {
   
  }

}