
import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITabItem } from 'src/app/common/interfaces/tab-item.interface.interface';
import { ITabName } from 'src/app/common/interfaces/tab-name.interface';
import { ITabStyle } from 'src/app/common/interfaces/tab-style.interface';
import { GeneratorService } from 'src/app/common/services/generator.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GeneratorComponent {

  numberPattern: string = '^[1-9][0-9]*$';
  tabName: ITabName = '(generator)';
  selectedStyle: ITabStyle = 'blue';
  generatorForm!: FormGroup;
  tabs: ITabItem[] = [];
  baseInput: string = '';
  baseOutput: string = '';
  repeats?: number;

  constructor(private generatorService: GeneratorService,
    private cdr: ChangeDetectorRef) {
    this.generatorForm = new FormGroup({
      'formRepeats': new FormControl('', [
        Validators.pattern(this.numberPattern)])
    })
  }


  tooltip(): string {
    return this.generatorForm!.get('formRepeats')!
      .invalid ? 'Only numbers are allowed' : 'Input repeats number';
  }
  
  handleRephrase(): void {
    this.baseOutput = this.baseInput;
  }

  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/^0+|[^\d]+/g, '');
    if (inputElement.value) {
      this.repeats = +inputElement.value;
    } else {
      this.repeats = undefined;
    }
    this.generatorService.transferRepeatsData(this.repeats!);
    this.cdr.detectChanges();
  }
  
}
