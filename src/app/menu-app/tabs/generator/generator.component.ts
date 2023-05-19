import { Component } from '@angular/core';
import { ITabItem } from '../../interfaces/tab-item.interface';
import { GeneratorService } from '../../services/generator.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['../../header/header-app.component.css', './generator.component.css']
})
export class GeneratorComponent {
  generatorForm!: FormGroup;
  constructor (private generatorService: GeneratorService) {
    this.generatorForm = new FormGroup({
      'formRepeats': new FormControl('', [
        Validators.pattern(this.numberPattern)])
    })
  }
  tabs: ITabItem[] = [];
  baseInput: string = '';
  baseOutput: string = '';
  repeats?: number;
  numberPattern: string = '^[0-9]+$';


  ngAfterViewChecked(){
    this.generatorService.transferRepeatsData(this.repeats!);
  }

  handleRephrase(): void {
    console.log(this.baseInput)
    this.baseOutput = this.baseInput;
  }
  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/^0+|[^\d]+/g, '');
    if (inputElement.value){
      this.repeats = +inputElement.value;
    } else {
      this.repeats = undefined;
    }
  }

}
