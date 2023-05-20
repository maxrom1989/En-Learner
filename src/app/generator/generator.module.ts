import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorComponent } from './components/generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputOutputModule } from '../common/components/input-output/input-output.module';

const routes: Routes = [
  {
    path: '',
    component: GeneratorComponent
  },
]

@NgModule({
  declarations: [GeneratorComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    TooltipModule,
    InputTextModule,
    ReactiveFormsModule,
    InputOutputModule
  ]
})
export class GeneratorModule { }
