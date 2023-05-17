import { Component } from '@angular/core';
import { ITabItem } from '../../interfaces/tab-item.interface';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['../../header/header-app.component.css', './generator.component.css']
})
export class GeneratorComponent {
  constructor (private generatorService: GeneratorService) {}
  tabs: ITabItem[] = [];
  baseInput: string = '';
  baseOutput: string = '';
  repeats?: number;
  numberPattern: string = '^[0-9]+$';

  ngAfterViewChecked(){
    this.generatorService.setRepeats(this.repeats!);
  }

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }

}
