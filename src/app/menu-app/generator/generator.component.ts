import { Component } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['../menu-app.component.css', './generator.component.css']
})
export class GeneratorComponent {

  baseInput: string = '';
  baseOutput: string = '';

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }

}
