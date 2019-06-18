import { Component, OnInit } from '@angular/core';

import {VgAPI} from 'videogular2/core';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'video-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  api:VgAPI;

  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api:VgAPI) {
      this.api = api;
  }

  jumpBack(event) {
    this.api.getDefaultMedia().currentTime -= 10;
  }

  jumpForward(event) {
    this.api.getDefaultMedia().currentTime += 10;
  }

  adjustBrightness(event) {
    console.log('brightness: ' + event.value)
  }

  adjustContrast(event) {
    console.log('contrast: ' + event.value)
  }

}
