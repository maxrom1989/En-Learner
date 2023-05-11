import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  mainData$ = new BehaviorSubject<{ data: string | null, errorMessage: string, isError: boolean }>
  ({data: null, errorMessage: '', isError: false});
  baseInput: string = '';
  baseOutput: string = '';
  // isLoading$ = new BehaviorSubject<{ errorMessage: string, isloading: boolean }>({errorMessage: '', isloading: false});
  constructor() { }

  transferMainData(data: string) {
    // this.baseOutput = this.baseInput;
    // this.isLoading$.next({isloading:true, errorMessage: ''});
    // this.mainData$.next({data: data, errorMessage: '', isError: false});
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    if (randomNumber === 5) {
      const errorMessage = "Something went wrong!";
      this.mainData$.next({data: '', errorMessage: errorMessage, isError:true});
    } else {
      this.mainData$.next({data: data, isError:false, errorMessage: ''});
    }
  }

  getMainData() {
    // return this.mainData.asObservable();
    return this.mainData$;
  }
}
