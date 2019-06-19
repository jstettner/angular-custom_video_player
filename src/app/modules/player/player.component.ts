import { Component, OnInit } from '@angular/core';

import {VgAPI} from 'videogular2/core';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  api: VgAPI;
  brightness: number;
  contrast: number;
  filter: any;

  updateFilter() {
    this.filter = {filter: 'brightness(' + this.brightness + '%) contrast(' + this.contrast + '%)'};
  }

  ngOnInit() {

  }

  constructor() {
    this.brightness = 100;
    this.contrast = 100;
    this.updateFilter();
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

  adjustBrightness(event) {
    this.brightness = event.value;
    this.updateFilter();
  }

  adjustContrast(event) {
    this.contrast = event.value;
    this.updateFilter();
  }

}
