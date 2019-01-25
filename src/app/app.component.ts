import { Component } from '@angular/core';
import { ServersService } from './servers.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serversService: ServersService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave() {
    this.serversService.storeServers(this.servers).subscribe(
      (servers) => {
        console.log(servers);
      },
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serversService.getServers().subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(data);
      },
      (error: any) => console.log(error)
    );
  }
}
