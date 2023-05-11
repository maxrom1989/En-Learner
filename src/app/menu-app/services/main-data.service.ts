import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  mainData$ = new BehaviorSubject<{ data: string | null, errorMessage: string, isError: boolean }>
  ({data: null, errorMessage: '', isError: false});
  error$ = new BehaviorSubject<any>(null);
  baseInput: string = '';
  baseOutput: string = '';
  constructor() { }

  transferMainData(data: string) {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (randomNumber < 5) {
      const errorMessage = "Something went wrong!";
      // return throwError(errorMessage);
      // this.mainData$.next({data: '', errorMessage: errorMessage, isError:true});
      this.mainData$.next(new Error as any);
    } else {
      this.mainData$.next({data: data, isError:false, errorMessage: ''});
      // return this.mainData$;
    }
  }

  getMainData() {
    return this.mainData$;
  }

  getAnswer(question: string): Observable<any> {
    let answer = of(`${question} ${Math.random()}`);
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (randomNumber < 5) {
      let maxError = 'MAX ERROR';
      this.error$.next(maxError);
      return throwError(maxError);
    } else {
      return answer
    }
  }
}
  
