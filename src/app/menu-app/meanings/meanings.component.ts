import { Component } from '@angular/core';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['../menu-app.component.css', './meanings.component.css']
})
export class MeaningsComponent {

  baseInput: string = '';
  baseOutput: string = '';

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }
}
