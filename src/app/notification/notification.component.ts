import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  animations: [
    trigger(
      'separator', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(-100%)', opacity: 1 }))
      ])
    ]
    ),
    trigger(
      'info', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateX(100%)', opacity: 1 }))
      ])
    ]
    )
  ],
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, AfterViewInit {

  displaySeparator = false;
  displayInfo = false;
  data: {
    clase: string,
    mensaje: string,
    closable: boolean,
    isUpdate: boolean
    loading: boolean
  };
  constructor(private sharedData: SharedDataService) {
    this.data = sharedData.data;
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    if (!this.data.isUpdate) {
      this.showSeparator();
    }
    // this.leaveInfo();
  }

  showSeparator() {
    setTimeout(() => {
      this.displaySeparator = true;
      this.showInfo();
    }, 200);
  }
  showInfo() {
    setTimeout(() => {
      this.displayInfo = true;
    }, 200);
  }

  leaveSeparator() {
    setTimeout(() => {
      this.displaySeparator = false;
    }, 250);
  }

  leaveInfo() {
    setTimeout(() => {
      this.leaveSeparator();
      this.displayInfo = false;
    }, 3200);
  }
  dismiss() {
    // this.sharedData.snackBar.dismiss();
  }

  reload() {
    document.location.reload();
  }

}
