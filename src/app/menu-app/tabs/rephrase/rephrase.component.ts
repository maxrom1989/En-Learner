import { MainDataService } from './../../services/main-data.service';
import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../../header/header-app.component.css', './rephrase.component.css']
  })
export class RephraseComponent implements OnInit{

  baseInput: string  = '';
  baseOutput: string  = '';
  // _isError: boolean = false;
  constructor (public mainDataService: MainDataService) {}

  ngOnInit(): void {
      this.mainDataService.getMainData().subscribe(_ => {
        this.baseOutput = this.baseInput;
      })
  }


  handleRephrase(): void {
    console.log(this.baseInput, this.baseOutput);
    // this.baseOutput = this.baseInput;
    // this._isError = false;
    // this.mainDataService.transferMainData(this.baseInput);
    this.mainDataService.transferMainData(this.baseInput)
    };
  }


  // da() {
  //   of(`${this.baseInput}${Math.random()}`).pipe(
  //     delay(5_000)
  //   ).subscribe(res => {
  //     this.baseOutput = res;
  //   })
  // }

