import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  repeats?: number;
  constructor() { }
  setRepeats(repeats: number) {
    this.repeats = repeats;
  }
}
