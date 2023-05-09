import { Component } from '@angular/core';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../menu-app.component.css', './rephrase.component.css']
  })
export class RephraseComponent {

  baseInput: string = '';
  baseOutput: string = '';

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }
}
