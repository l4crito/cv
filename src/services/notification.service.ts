import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataProvider } from './data.provider';
import { NotificationComponent } from '../app/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar,
    private sharedData: DataProvider,
  ) { }

  showInfo(message: string) {
    this.sharedData.data = {
      clase: 'info',
      closable: false,
      isUpdate: false,
      loading: false,
      mensaje: message
    };
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3500,
    });
  }
  showError(message: string) {
    this.sharedData.data = {
      clase: 'error',
      closable: false,
      isUpdate: false,
      loading: false,
      mensaje: message
    };
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3500,
    });
  }
  showWarn(message: string) {
    this.sharedData.data = {
      clase: 'warn',
      closable: false,
      isUpdate: false,
      loading: false,
      mensaje: message
    };
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 3500,
    });
  }
}
