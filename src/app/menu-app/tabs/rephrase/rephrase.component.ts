import { MainDataService } from './../../services/main-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { EMPTY, catchError, delay, of, throwError } from 'rxjs';

@Component({
  selector: 'app-rephrase',
  templateUrl: './rephrase.component.html',
  styleUrls: ['../../header/header-app.component.css', './rephrase.component.css']
  })
export class RephraseComponent implements OnInit{

  baseInput: string  = '';
  baseOutput: string  = '';
  errorMessage?: string;
  
  constructor (public mainDataService: MainDataService) {}

  ngOnInit(): void {
      this.mainDataService.getMainData()
      .pipe(
        catchError((err)=> {
          this.errorMessage = err.message;
          return EMPTY;
          
        })
      )
      .subscribe(_ => {
        this.baseOutput = _.data!;
      })
  }


  // handleRephrase(): void {
  //   console.log(this.baseInput, this.baseOutput);
  //   this.mainDataService.transferMainData(this.baseInput)
  // };

  handleRephrase(input: string): void {
    this.mainDataService.getAnswer(input).subscribe({
      next:(res) => {
        console.log(res);
        this.baseOutput = res;
      },
      error:(err) => {
        console.warn(err);
      }
    })
  };

}




