import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  @Output() closeOptions: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }


}
