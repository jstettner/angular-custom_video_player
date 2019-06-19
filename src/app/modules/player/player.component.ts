import { Component, OnInit } from '@angular/core';
import {PlayerService} from './services/player.service';

import {VgAPI} from 'videogular2/core';
import {MatSliderModule} from '@angular/material/slider';


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

  constructor(private _playerService: PlayerService) {
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

  jumpBack(event) {
    this.api.getDefaultMedia().currentTime -= 10;
  }

  jumpForward(event) {
    this.api.getDefaultMedia().currentTime += 10;
  }
}
