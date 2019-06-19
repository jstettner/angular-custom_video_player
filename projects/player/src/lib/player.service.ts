import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private brightnessSource = new Subject<number>();
  private contrastSource = new Subject<number>();

  brightness$ = this.brightnessSource.asObservable();
  contrast$ = this.contrastSource.asObservable();

  constructor() {
    this.updateBrightness(100);
    this.updateContrast(100);
  }

  updateBrightness(value) {
    this.brightnessSource.next(value);
  }

  updateContrast(value) {
    this.contrastSource.next(value);
  }
}
