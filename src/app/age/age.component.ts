import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { DataProvider } from '../../services/data.provider';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit, AfterViewInit {

  @Output() closeAge: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeAge: EventEmitter<string> = new EventEmitter<string>();
  currentBirthday: string;
  constructor(private sharedData: DataProvider, private notificationService: NotificationService) {
    this.currentBirthday = JSON.parse(JSON.stringify(this.sharedData.birthday));

  }
  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

  isDate() {
    const date = new Date(this.currentBirthday).toString();
    if (date === 'Invalid Date') {
      return false;
    }
    if (this.currentBirthday === this.sharedData.birthday) {
      return false;
    }

    return true;
  }

  save() {
    if (this.currentBirthday === this.sharedData.birthday) {
      this.notificationService.showWarn('Sin cambios');
      return false;
    }
    if (!this.isDate()) {
      this.notificationService.showError('Ingrese una fecha válida');
      return;
    }
    this.changeAge.emit(this.currentBirthday);
  }


}
