import { Injectable } from '@angular/core';
import { RephraseMethod } from '../interfaces/rephrase-method';

@Injectable({
  providedIn: 'root'
})

export class RephraseService {

  rephraseMethod?: string;

  constructor() { }

  setRephraseMethod(method: RephraseMethod) {
    this.rephraseMethod = method.name;
  }

}
