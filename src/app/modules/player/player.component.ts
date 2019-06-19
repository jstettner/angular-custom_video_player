import { Component, OnInit } from '@angular/core';
import {PlayerService} from './services/player.service';

import {VgAPI} from 'videogular2/core';
import {MatSliderModule} from '@angular/material/slider';

import {HotkeysService, Hotkey} from 'angular2-hotkeys';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  api: VgAPI;
  style: any;
  brightness: number;
  contrast: number;

  constructor(private _playerService: PlayerService, private _hotkeysService: HotkeysService) {
    this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
        this.api.getDefaultMedia().currentTime -= 5;
        return false;
    }));
    this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
        this.api.getDefaultMedia().currentTime += 5;
        return false;
    }));
    this._hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
        this.api.volume += this.api.volume < 1 ? .1 : 0;
        return false;
    }));
    this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
        this.api.volume -= this.api.volume > 0 ? .1 : 0;
        return false;
    }));
    this._hotkeysService.add(new Hotkey('space', (event: KeyboardEvent): boolean => {
        var state = this.api.getDefaultMedia().state;
        if (state == 'paused') {
          this.api.getDefaultMedia().play();
        } else if(state == 'playing') {
          this.api.getDefaultMedia().pause();
        }

        return false;
    }));

    this.brightness = 100;
    this.contrast = 100;
    this.updateFilter();
  }

  updateFilter() {
    this.style = {filter: 'brightness(' + this.brightness + '%) contrast(' + this.contrast + '%)'};
  }

  ngOnInit() {
    this._playerService.brightness$.subscribe((data) => {
      this.brightness = data;
      this.updateFilter();
    });

    this._playerService.contrast$.subscribe((data) => {
      this.contrast = data;
      this.updateFilter();
    });
  }

  onPlayerReady(api: VgAPI) {
      this.api = api;
  }

  jumpBack() {
    this.api.getDefaultMedia().currentTime -= 10;
  }

  jumpForward() {
    this.api.getDefaultMedia().currentTime += 10;
  }
}
