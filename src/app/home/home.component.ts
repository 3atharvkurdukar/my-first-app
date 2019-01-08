import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => console.log(number)
    // );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next('First Package'), 2000);
      setTimeout(() => observer.next('Second Package'), 4000);
      // setTimeout(() => observer.error('This does not work'), 5000);
      setTimeout(() => observer.complete(), 5000);
      setTimeout(() => observer.next('Third Package'), 6000);   // It will never get executed
    });
    myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('Completed!')
    );
  }

}
