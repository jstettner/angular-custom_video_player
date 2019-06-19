import { Component, OnInit } from '@angular/core';

import {VgAPI} from 'videogular2/core';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-video-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  api: VgAPI;
  brightness: number;
  contrast: number;

  updateFilter() {
    this.filter = {filter: 'brightness(' + this.brightness + '%) contrast(' + this.contrast + '%)'};

  }

  constructor() {
    this.brightness = 100;
    this.contrast = 100;
  }

  onPlayerReady(api: VgAPI) {
      this.api = api;
      this.updateFilter();
  }

  jumpBack(event) {
    this.api.getDefaultMedia().currentTime -= 10;
  }

  jumpForward(event) {
    this.api.getDefaultMedia().currentTime += 10;
  }

  adjustBrightness(event) {
    this.brightness = event.value;
    this.updateFilter();
  }

  adjustContrast(event) {
    this.contrast = event.value;
    this.updateFilter();
  }

}
