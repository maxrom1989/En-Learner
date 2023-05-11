import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDataServiceService {

  private mainData = new Subject<string>();

  constructor() { }

  transferMainData(data: string) {
    this.mainData.next(data);

  }

  getMainData() {
    // return this.mainData.asObservable();
    return this.mainData;
  }
}
