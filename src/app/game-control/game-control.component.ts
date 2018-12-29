import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter = 0;
  @Output() counterIncreased = new EventEmitter<number>();
  counterInterval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.counterInterval = setInterval(() => {
      this.counterIncreased.emit(++this.counter);
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.counterInterval);
  }
}
