import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = 'One way data binding example.';

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 90;
  n2 = 50;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Pau";

  //style binding
  appliedCSSClass = "green";
  notappliedCSS = true;
  myColor = "blue";

  //two way data binding
  showData($event:any){
    console.log("Button is clicked.")
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }
}