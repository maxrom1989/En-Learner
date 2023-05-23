import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './input-output.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [InputOutputComponent],
  exports: [InputOutputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    InputTextareaModule,
    MessagesModule
  ]
})
export class InputOutputModule { }
