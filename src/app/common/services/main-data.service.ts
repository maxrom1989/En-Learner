import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainDataService {

  mainData$ = new BehaviorSubject<{
    data: string | null,
    errorMessage: string,
    isError: boolean
  }>({
    data: null, errorMessage: '',
    isError: false
  });
  error$ = new BehaviorSubject<string>('');
  baseInput: string = '';
  baseOutput: string = '';

  constructor() { }

  transferMainData(data: string) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber < 5) {
      const errorMessage = "Something went wrong!";
      this.mainData$.next(new Error as any);
    } else {
      this.mainData$.next({ data: data, isError: false, errorMessage: '' });
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
      return throwError(() => maxError);
    } else {
      this.error$.next('');
      return answer
    }
  }

}

