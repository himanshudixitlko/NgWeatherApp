import { Component } from '@angular/core';
import {ChildComponent} from "../WeatherData/child.component"
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCity:string;
 
}
