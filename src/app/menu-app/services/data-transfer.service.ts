import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { InputDataTransfer } from '../interfaces/input-data-transfer';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data$ = new BehaviorSubject<InputDataTransfer>({input: '', tab: '', style: ''});
  currentData = this.data$.asObservable();

  constructor() { }

  transferData(input: string, tab: string, style: string) {
    this.data$.next({input, tab, style});
  }

  getData() {
    return this.data$;
  }
}