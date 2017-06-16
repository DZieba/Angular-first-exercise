import { Component } from '@angular/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlayListComponent} from "./playlist.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})

export class AppComponent {
  title = Config.MAIN_HEADING;
  videos:Array<Video>;

  constructor(){
    this.videos=[
      new Video(1,'Podloga lawa','6R_t0Kk2ors','zobacz'),
      new Video(2,'Angular begginers','f8qBeaGe2S4','zobacz2')
    ]
  }
}
