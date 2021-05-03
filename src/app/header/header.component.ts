import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/services/data.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showOptions = false;
  christianPhotos: string[] = [];
  currentPhoto = 0;
  showChangeAge = false;
  constructor(
    public sharedData: DataProvider,
  ) { }

  ngOnInit(): void {
    this.fillPhotos();
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

  getAge() {
    const diff = Date.now() - new Date(this.sharedData.birthday).getTime();
    const currAge = new Date(diff);
    return Math.abs(currAge.getUTCFullYear() - 1970);
  }

}
