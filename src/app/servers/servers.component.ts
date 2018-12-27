import { Component, OnInit } from '@angular/core';
import { Server } from 'net';

@Component({
  selector: 'app-servers',      // selecting based on the custom tag
  // selector: '.app-servers',  // selecting based on the class named as 'app-servers'
  // selector: '[app-servers]', // selecting based on the attribute named as 'app-selector'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  servers = ['help', 'timepass'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
