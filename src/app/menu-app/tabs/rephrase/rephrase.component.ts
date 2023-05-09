import { Component, OnInit } from '@angular/core';
import { EMPTY, delay, map, of } from 'rxjs';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../../header/header-app.component.css', './rephrase.component.css']
  })
export class RephraseComponent implements OnInit{

  baseInput: string = '';
  baseOutput: string = '';

  ngOnInit(): void {
      
  }
  handleRephrase(): void {
    console.log(this.baseInput);
    // this.baseOutput = this.baseInput;
    this.da();
  }


  da() {
    of(`${this.baseInput}${Math.random()}`).pipe(
      delay(5_000)
    ).subscribe(res => {
      this.baseOutput = res;
    })
  }
}
