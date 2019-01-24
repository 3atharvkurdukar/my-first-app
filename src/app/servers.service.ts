import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any) {
    return this.http.post('https://atharv-angular-http.firebaseio.com/servers.json', servers);
  }
}
