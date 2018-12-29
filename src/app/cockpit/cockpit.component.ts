import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output () serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  @Output () blueprintCreated = new EventEmitter<{
    blueprintName: string,
    blueprintContent: string
  }>();

  @ViewChild('contentInput') contentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    }) ;
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.contentInput.nativeElement.value
    });
  }

}
