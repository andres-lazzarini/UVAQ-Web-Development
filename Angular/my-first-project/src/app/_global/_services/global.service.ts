import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  showLoader = false;
  showLoaderMsg = '';
  moduleTitle = '';

  constructor() {}

  showGlobalLoader(message?: string) {
    this.showLoader = true;
    this.showLoaderMsg = message ? message : 'Loading..';
  }

  hideGlobalLoader() {
    this.showLoader = false;
  }
}
