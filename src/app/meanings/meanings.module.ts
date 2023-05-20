import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeaningsComponent } from './components/meanings.component';
import { InputOutputModule } from '../common/components/input-output/input-output.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MeaningsComponent
  },
]

@NgModule({
  declarations: [MeaningsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    InputOutputModule,
    FormsModule
  ]
})
export class MeaningsModule { }
