import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {

  showParagraph = false;
  logs = [];

  constructor() {
  }

  onDisplayDetails() {
    this.showParagraph = !this.showParagraph;
    this.logs.push(new Date().getTime());
  }
}
