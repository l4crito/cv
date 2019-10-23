import { Component } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { trigger, transition, style, animate } from '@angular/animations';
import { SharedDataService } from '../services/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from '../services/notification.service';

@Component({
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('150ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('150ms', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ]
    )
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  christianPhotos: string[] = [];
  currentPhoto = 0;
  showOptions = false;
  showChangeAge = false;
  constructor(
    private notificationService: NotificationService,
    private sharedData: SharedDataService,
    private hotkeysService: HotkeysService) {
    this.fillPhotos();
    this.hotKeys();
  }
  title = 'cv-christian';

  fillPhotos() {
    this.christianPhotos.push('assets/1.jpg');
    this.christianPhotos.push('assets/2.jpg');
    this.christianPhotos.push('assets/3.jpg');
    this.christianPhotos.push('assets/4.jpg');
    this.christianPhotos.push('assets/5.jpg');
    this.christianPhotos.push('assets/6.jpg');
    this.christianPhotos.push('assets/7.jpg');
    this.currentPhoto = Math.floor(Math.random() * ((this.christianPhotos.length - 1) - 0 + 1));
  }

  getPhoto() {
    return this.christianPhotos[this.currentPhoto];
  }
  nextPhoto() {
    this.currentPhoto++;
    this.currentPhoto = this.currentPhoto === this.christianPhotos.length ? 0 : this.currentPhoto;
  }
  pevPhoto() {
    this.currentPhoto--;
    this.currentPhoto = this.currentPhoto < 0 ? (this.christianPhotos.length - 1) : this.currentPhoto;
  }

  getAge() {
    const diff = Date.now() - new Date(this.sharedData.birthday).getTime();
    const currAge = new Date(diff);
    return Math.abs(currAge.getUTCFullYear() - 1970);
  }

  hotKeys() {
    this.hotkeysService.add(new Hotkey('alt+e', (event: KeyboardEvent): boolean => {
      this.showChangeAge = true;
      return false;
    }));
    this.hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
      this.pevPhoto();
      return false;
    }));
    this.hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
      this.nextPhoto();
      return false;
    }));
    this.hotkeysService.add(new Hotkey('esc', (event: KeyboardEvent): boolean => {
      this.showOptions = false;
      this.showChangeAge = false;
      return false;
    }));
    this.hotkeysService.add(new Hotkey('?', (event: KeyboardEvent): boolean => {
      this.showOptions = true;
      return false;
    }));
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
  changeAge(date: string) {
    this.sharedData.birthday = date;
    this.showChangeAge = false;
    this.notificationService.showInfo('Fecha modificada');
  }


}

