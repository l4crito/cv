import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  birthday = '1993/01/ 21';
  data: {
    clase: string,
    mensaje: string,
    closable: boolean,
    isUpdate: boolean
    loading: boolean
  };
  constructor() { }
}
