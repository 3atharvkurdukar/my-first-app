import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterToInactive = 0;
  counterToActive = 0;

  addCounterToInactive() {
    this.counterToInactive++;
  }

  addCounterToActive() {
    this.counterToActive++;
  }
}
