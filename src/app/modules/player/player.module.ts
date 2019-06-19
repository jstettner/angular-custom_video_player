import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { PlayerComponent } from './player.component';

import {MatSliderModule, MatGridListModule} from '@angular/material';
import { EffectControllerComponent } from './effect-controller/effect-controller.component';

@NgModule({
  declarations: [
    PlayerComponent,
    EffectControllerComponent
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule
  ],
  exports: [
    PlayerComponent,
    EffectControllerComponent
  ]
})
export class PlayerModule { }
