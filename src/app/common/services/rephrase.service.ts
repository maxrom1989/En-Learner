import { Injectable } from '@angular/core';
import { IRephraseMethod } from '../interfaces/rephrase-method.interface';

@Injectable({
  providedIn: 'root'
})

export class RephraseService {

  rephraseMethod?: string;

  constructor() { }

  setRephraseMethod(method: IRephraseMethod) {
    this.rephraseMethod = method.name;
  }

}
