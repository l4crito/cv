import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '../models/experience.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  @Input() item: ItemModel;
  constructor() { }

  ngOnInit() {
  }

}
