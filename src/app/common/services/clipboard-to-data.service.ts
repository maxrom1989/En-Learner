import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClipboardToDataService {

  constructor() { }

  private dataSubject = new BehaviorSubject<string>('');
  public data$ = this.dataSubject.asObservable();

  transferData(data: string) {
    this.dataSubject.next(data);
  }

}
