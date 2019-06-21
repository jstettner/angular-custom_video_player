## Installing
`npm install angular-video-player-plus videogular2@^6.4.0 angular2-hotkeys@^2.1.4 hammerjs@^2.0.8 material-icons@^0.3.1 @angular/material@^8.0.1 @angular/cdk@^8.0.1`

## Setting Up
``` javascript
// app.module.ts
import { PlayerModule } from 'angular-video-player-plus';
...
@NgModule({
  ...
  imports: [
    ...,
    PlayerModule
  ],
  ...
})
...
```

``` javascript
// app.component.ts
import { PlayerService } from 'angular-video-player-plus';
...
@Component({
  ...
  providers: [
    ...,
    PlayerService
  ]
})
...
```

## Implementing
Include in your template:
`<player> <YOUR VIDEO SOURCE> <player>`

You may also include the control panel:
`<player-controller></player-controller>`

## Including Styles
If you want to add our styles to the player, in your styles.css file, add
```css
@import url("../node_modules/videogular2/fonts/videogular.css");
@import url("../node_modules/material-icons/iconfont/material-icons.css");
@import url("../node_modules/angular-video-player-plus/player.css");
```
For Slider support add hammer import to main.ts:
`import 'hammerjs';`

## Api
You can access the native api of Videogular by using the following:
``` javascript
// app.component.ts
import { PlayerService } from 'angular-video-player-plus';
...
@Component({
  ...
  providers: [
    ...,
    PlayerService
  ]
})
...
export class AppComponent implements AfterViewInit {
  api: PlayerService;
  ...
  constructor(api: PlayerService) {
    this.api = api;
  }

  // for example:
  printTime() {
    console.log(this.api.getApi().getDefaultMedia().currentTime);
  }
  ...
}
```
