import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './input-output.component';
import { RephraseComponent } from 'src/app/rephrase/components/rephrase.component';
import { RephraseModule } from 'src/app/rephrase/rephrase.module';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [InputOutputComponent],
  exports: [InputOutputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    InputTextareaModule
  ]
})
export class InputOutputModule { }
