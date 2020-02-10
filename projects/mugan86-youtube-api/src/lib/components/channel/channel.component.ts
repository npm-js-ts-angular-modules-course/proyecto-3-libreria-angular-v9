import { Snippet } from './../../interfaces/api/channel.interface';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mugan86-yt-api-channel',
  templateUrl: './channel.component.html',
  styles: []
})
export class ChannelComponent implements OnInit {

  @Input() channelId: string;
  channel: Snippet;
  constructor(private api: ApiService) { }

  ngOnInit() {
    if (this.channelId === undefined || this.channelId === null || this.channelId === '') {
      this.channelId = 'UCTh7-deUJBNv2tHRiMGcXxg';
    }
    this.api.getUserChannelInfo(this.channelId).subscribe(
      (data: Snippet) => {
        this.channel = data;
      }
    );
  }

}
