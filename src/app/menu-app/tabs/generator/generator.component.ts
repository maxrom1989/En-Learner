import { Component } from '@angular/core';
import { ITabItem } from '../../interfaces/tab-item.interface';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['../../header/header-app.component.css', './generator.component.css']
})
export class GeneratorComponent {
  tabs: ITabItem[] = [];
  baseInput: string = '';
  baseOutput: string = '';

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }

}
