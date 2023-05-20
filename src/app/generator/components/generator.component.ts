import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITabItem } from 'src/app/common/interfaces/tab-item.interface';
import { GeneratorService } from 'src/app/common/services/generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['../../common/components/header/header-app.component.css', './generator.component.css']
})

export class GeneratorComponent {

  numberPattern: string = '^[0-9]+$';
  tabName: string = '(generator)';
  selectedStyle: string ='blue';
  generatorForm!: FormGroup;
  tabs: ITabItem[] = [];
  baseInput: string = '';
  baseOutput: string = '';
  repeats?: number;

  constructor(private generatorService: GeneratorService) {
    this.generatorForm = new FormGroup({
      'formRepeats': new FormControl('', [
        Validators.pattern(this.numberPattern)])
    })
  }

  ngAfterViewChecked() {
    this.generatorService.transferRepeatsData(this.repeats!);
  }

  handleRephrase(): void {
    this.baseOutput = this.baseInput;
  }

  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/^0+|[^\d]+/g, '');
    if (inputElement.value) {
      this.repeats = +inputElement.value;
    } else {
      this.repeats = undefined;
    }
  }

}
