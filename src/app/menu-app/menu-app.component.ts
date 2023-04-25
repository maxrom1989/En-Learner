import { Component } from '@angular/core';

type IAreaShown = 'REPHRASE' | 'MEANINGS' | 'GENERATOR';

@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css']
})


export class MenuAppComponent {
  areaShown: IAreaShown = 'REPHRASE';
  baseInput: string = '';
  baseOutput: string = '';

  setAreaShown (val: IAreaShown) {
    this.areaShown = val;  
  }

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }
}
