import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GeneratorService {

  private repeats = new BehaviorSubject<number>(0);
  public repeatsData$ = this.repeats.asObservable();

  transferRepeatsData(repeats: number) {
    this.repeats.next(repeats);
  }
  
}
