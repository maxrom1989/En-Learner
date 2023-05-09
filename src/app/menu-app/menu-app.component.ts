import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css']
})


export class MenuAppComponent {

  selectedComponent: string = 'RephraseComponent';
  constructor(private router: Router) {}



  navigateToComponent(component: string) {
    this.router.navigate([component]);
    this.selectedComponent = component;
  }

}
