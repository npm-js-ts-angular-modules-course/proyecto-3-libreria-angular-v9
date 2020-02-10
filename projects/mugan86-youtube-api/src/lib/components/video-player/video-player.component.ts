import { Component, Input } from '@angular/core';

@Component({
  selector: 'mugan86-yt-api-video-player',
  templateUrl: './video-player.component.html',
  styles: []
})
export class VideoPlayerComponent {

  @Input() id: string;

}
