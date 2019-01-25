import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any) {

    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // This appends data to the existing database
    // return this.http.post(
    //   'https://atharv-angular-http.firebaseio.com/servers.json',
    //   servers,
    //   { headers: headers }
    // );

    // This overwrites the data in the existing database
    return this.http.put(
      'https://atharv-angular-http.firebaseio.com/servers.json',
      servers,
      { headers: headers }
    );
  }

  getServers() {
    return this.http.get('https://atharv-angular-http.firebaseio.com/servers').pipe(
      map(
        (response: Response) => response.json()
      )
      ).pipe(
        catchError((error: Response) => {
          return throwError('Something went wrong!');
        })
      );
  }
}
