import { Component, OnInit } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { trigger, transition, style, animate } from '@angular/animations';
import { SharedDataService } from '../services/shared-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from '../services/notification.service';
import { ItemModel } from './models/experience.model';

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
  christianPhotos: string[] = [];
  currentPhoto = 0;
  showOptions = false;
  showChangeAge = false;
  experience: ItemModel[] = [];
  quickAspects: ItemModel[] = [];
  certifications: ItemModel[] = [];
  constructor(
    private notificationService: NotificationService,
    private sharedData: SharedDataService,
    private hotkeysService: HotkeysService) {
    this.fillPhotos();
    this.hotKeys();
  }
  ngOnInit(): void {
    this.certifications = [
      {
        name: 'MongoDB',
        date: ' febrero 2019',
        activities: ['› Course Completion Confirmation M001: MongoDB Basics']
      },
      {
        name: 'MIT APP INVENTOR',
        date: 'agosto 2016',
        activities: ['› Best design app of the month']
      },
      {
        name: ' Microsoft',
        date: 'octubre 2013',
        activities: ['› MICROSOFT CERTIFIED PROFESSIONAL']
      },
      {
        name: ' Microsoft',
        date: 'octubre 2013',
        activities: ['›DATABASE FUNDAMENTALS']
      },
    ];
    this.quickAspects = [
      {
        name: 'UNIVERSIDAD TÉCNICA DE AMBATO',
        photo: 'assets/uta.png',
        activities: ['Ingeniero en Sistemas Computacionales e Informáticos']
      },
      {
        name: 'INSTITUTO SUPERIOR TECNOLÓGICO DOCENTE GUAYAQUIL',
        photo: 'assets/guayas.png',
        activities: ['Bachiller en electrónica de consumo']
      },
      {
        photo: 'assets/bot.jpg',
        activities: [' Pasión por la tecnología, electrónica y robótica']
      },
    ];
    this.experience = [
      {
        name: 'Megaprofer S.A.',
        date: 'agosto 2020 – actualidad',
        activities: [
          '› Desarrollador back-end',
          '› Desarrollador front-end',
        ]
      },
      {
        name: 'Alquimiasoft',
        date: 'enero 2019 – agoso 2020',
        activities: [
          '› Análisis de datos',
          '› Desarrollador back-end',
          '› Desarrollador front-end',
        ]
      },
      {
        name: 'Absolute Training Center',
        date: 'junio 2018 – noviembre 2018',
        activities: [
          '› Mantenimiento',
          '› Desarrollo del sistema informático para control de clientes, inventario , control de pagos',
        ]
      },
      {
        name: 'Genius Store',
        date: 'septiembre 2017 – febrero 2018',
        activities: [
          '› Asesor comercial',
          '› Desarrollo de Sistemas Informáticos',
          '› Desarrollo de Sistemas Electrónicos',
          '› Robótica',
        ]
      },
      {
        name: 'Unidad Educativa Luis A. Martínez',
        date: 'septiembre 2017 – febrero 2018',
        activities: [
          '› Creación de un prototipo que facilita el aprendizaje de lógica de programación',
        ]
      },
      {
        name: 'Junta de Aguas Unión Y Progreso Sta. Rosa',
        date: 'agosto 2016 – febrero 2017',
        activities: [
          '› Desarrollo de un sistema para control de pagos de agua de la comunidad',
        ]
      },
      {
        name: 'Universidad Técnica de Ambato (pasante ti)',
        date: 'agosto 2015 – enero 2016',
        activities: [
          '› Cableado Estructurado del área de Biblioteca',
          '› Mapa de redes de la facultad',
          '› Cableado estructurado “Centro de Artes UTA”',
          '› Cableado Estructurado “Centro de Desarrollo Infantil UTA”',
          '› Cableado Estructurado “Facultad de Contabilidad y Administración”',
          '› Mantenimiento de Ordenadores de los laboratorios 1 y 2 Creación del programa para el control de pasantías de la facultad',
        ]
      },
      {
        name: 'Patto’s y Patolini calzado',
        date: 'marzo 2014 – octubre 2014',
        activities: [
          '› Diseño de bordado computarizado',
          '› Operador de maquinaria de bordado',
        ]
      },
    ];
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
      this.showOptions = false;
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


}

