import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any) {

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(
      'https://atharv-angular-http.firebaseio.com/servers.json',
      servers,
      { headers: headers }
    );
  }

  getServers() {
    return this.http.get('https://atharv-angular-http.firebaseio.com/servers.json');
  }
}
