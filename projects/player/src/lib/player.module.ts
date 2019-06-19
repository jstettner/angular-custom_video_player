import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { PlayerComponent } from './player.component';

import {MatSliderModule, MatGridListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { EffectControllerComponent } from './effect-controller.component';

import {HotkeyModule} from 'angular2-hotkeys';

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
    MatGridListModule,
    MatButtonModule,
    HotkeyModule.forRoot()
  ],
  exports: [
    PlayerComponent,
    EffectControllerComponent
  ]
})
export class PlayerModule { }
