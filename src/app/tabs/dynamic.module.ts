import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import DynamicComponent from './dynamic.componet';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ 
    DynamicComponent    
 ],
  imports: [ 
    CommonModule,
    DynamicComponent,
    FormsModule,
    HttpClientModule ],
  providers:[]
})
export default class DynamicModule {
  //routes = routes;
 }