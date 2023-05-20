import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { InputOutputComponent } from '../common/components/input-output/input-output.component';
import { RephraseComponent } from './components/rephrase.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { InputOutputModule } from '../common/components/input-output/input-output.module';

const routes: Routes = [
  {
    path: '',
    component: RephraseComponent
  },
]

@NgModule({
  declarations: [RephraseComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RadioButtonModule,
    FormsModule,
    InputOutputModule
  ]
})

export class RephraseModule { }
