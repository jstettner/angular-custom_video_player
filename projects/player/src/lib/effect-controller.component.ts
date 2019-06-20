import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'video-player-controller',
  templateUrl: './effect-controller.component.html'
})
export class EffectControllerComponent implements OnInit {
  brightness: number;
  contrast: number;

  constructor(private _playerService: PlayerService) {
    this.brightness = 100;
    this.contrast = 100;
  }

  ngOnInit() {
    this._playerService.brightness$.subscribe((data) => {
      this.brightness = data;
    });

    this._playerService.contrast$.subscribe((data) => {
      this.contrast = data;
    });
  }

  adjustBrightness(event) {
    this._playerService.updateBrightness(event.value);
  }

  adjustContrast(event) {
    this._playerService.updateContrast(event.value);
  }

  resetBrightness() {
    this._playerService.updateBrightness(100);
  }

  resetContrast() {
    this._playerService.updateContrast(100);
  }
}
