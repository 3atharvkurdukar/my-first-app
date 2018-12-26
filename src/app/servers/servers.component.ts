import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',      // selecting based on the custom tag
  // selector: '.app-servers',  // selecting based on the class named as 'app-servers'
  // selector: '[app-servers]', // selecting based on the attribute named as 'app-selector'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setInterval(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  ngOnInit() {}
}
