import { Component, HostListener, OnInit } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataProvider } from '../services/data.provider';
import { NotificationService } from '../services/notification.service';
import { ItemModel } from './models/experience.model';
import { experience, quickAspects, certifications } from '../app/data/data';

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
export class AppComponent implements OnInit {

  showOptions = false;
  showChangeAge = false;
  experience = experience;
  quickAspects = quickAspects;
  certifications = certifications;
  constructor(
    private notificationService: NotificationService,
    private sharedData: DataProvider,
    private hotkeysService: HotkeysService) {
    this.hotKeys();
  }
  ngOnInit(): void {

  }
  title = 'cv-christian';

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    console.debug("Scroll Event", window.pageYOffset);
  }


  hotKeys() {
    this.hotkeysService.add(new Hotkey('alt+e', (event: KeyboardEvent): boolean => {
      this.showChangeAge = true;
      this.showOptions = false;
      return false;
    }));
    // this.hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
    //   this.pevPhoto();
    //   return false;
    // }));
    // this.hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
    //   this.nextPhoto();
    //   return false;
    // }));
    this.hotkeysService.add(new Hotkey('esc', (event: KeyboardEvent): boolean => {
      this.showOptions = false;
      this.showChangeAge = false;
      return false;
    }));
    this.hotkeysService.add(new Hotkey('?', (event: KeyboardEvent): boolean => {
      this.showChangeAge = false;
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
  onScroll(evt: any) {
    this.sharedData.scroll = evt.srcElement.scrollTop;
  }



}

