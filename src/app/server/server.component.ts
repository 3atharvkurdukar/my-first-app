import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {

  username = '';

  isEmpty() {
    return this.username.length === 0;
  }

  onLogin() {
    this.username = null;
  }

}
