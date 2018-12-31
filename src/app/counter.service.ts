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
