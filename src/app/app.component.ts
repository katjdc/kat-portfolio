import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'kat-portfolio';
  logo = "./assets/kat-logo.png";
  logoname = "Katrine";

  constructor () { }
}
