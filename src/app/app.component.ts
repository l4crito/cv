import { Component } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  christianPhotos: string[] = [];
  currentPhoto = 0;
  constructor(private hotkeysService: HotkeysService) {
    this.christianPhotos.push('../assets/1.jpg');
    this.christianPhotos.push('../assets/2.jpg');
    this.christianPhotos.push('../assets/3.jpg');
    this.christianPhotos.push('../assets/4.jpg');
    this.christianPhotos.push('../assets/5.jpg');
    this.christianPhotos.push('../assets/6.jpg');
    this.christianPhotos.push('../assets/7.jpg');
    this.currentPhoto = Math.floor(Math.random() * ((this.christianPhotos.length - 1) - 0 + 1));
    this.hotKeys();

  }
  title = 'cv-christian';

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
    const diff = Date.now() - new Date('1993/01/ 21').getTime();
    const currAge = new Date(diff);
    return Math.abs(currAge.getUTCFullYear() - 1970);
  }

  hotKeys() {
    this.hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
      this.pevPhoto();
      return false;
    }));
    this.hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
      this.nextPhoto();
      return false;
    }));
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}

