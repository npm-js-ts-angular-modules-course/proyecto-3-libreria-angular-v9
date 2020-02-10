import { PlaylistItems, Item } from './../interfaces/api/playlis-items.interface';
import { Playlist } from './../interfaces/api/playlist.interface';
import { Channel } from './../interfaces/api/channel.interface';
import { map } from 'rxjs/operators';
import { API } from './../constants/urls';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  info = 'part=id%2Csnippet%2CcontentDetails';
  pageToken = '';
  playlistVideos: Item[] = [];
  // Canal info
  // /channels?part=id%2Csnippet%2CcontentDetails&id=UCTh7-deUJBNv2tHRiMGcXxg&key=
  // PLay list de usuario X
  // /playlists?part=id%2Csnippet%2CcontentDetails&channelId=UCTh7-deUJBNv2tHRiMGcXxg&pageToken=CAUQAA&key=[YOUR_API_KEY]
  // Items de un play list
  // playlistItems?part=id%2Csnippet%2CcontentDetails&playlistId=PLaaTcPGicjqiyuOFrie6fXVyUGJNp9yFe&key=[YOUR_API_KEY]
  constructor(private config: ConfigService, private http: HttpClient) { }

  private getUrl(request: string): string {
    return `${API}${ request }&maxResults=9&key=${this.config.apiKey}`;
  }

  getUserChannelInfo( user: string ) {
    return this.http.get(this.getUrl(`channels?${this.info}&id=${ user }`)).pipe(
      map(
        ( res: Channel ) => {
          return res.items[0].snippet;
        }
      )
    );
  }

  getLastPlaylistAddByUserChannel( user: string ) {
    return this.http.get(this.getUrl(`playlists?${this.info}&channelId=${ user }`)).pipe(
      map(
        ( res: Playlist ) => {
          return res;
        }
      )
    );
  }

  getItemsByPlaylist( playlistId: string, loadMore: boolean = false ) {
    if (this.playlistVideos.length > 0 && this.playlistVideos[0].snippet.playlistId !== playlistId) {
      this.playlistVideos = [];
      this.pageToken = '';
    }
    let pageToken = '';
    if (this.pageToken !== '' && loadMore) {
      pageToken = `&pageToken=${ this.pageToken }`;
    }
    return this.http.get(this.getUrl(`playlistItems?${this.info}&playlistId=${ playlistId }${pageToken}`)).pipe(
      map(
        ( res: PlaylistItems ) => {
          this.pageToken = (res.nextPageToken) ? res.nextPageToken : 'OK';
          this.playlistVideos = this.takeVideos(res.items);
          return this.playlistVideos;
        }
      )
    );
  }
  private takeVideos(items: any) {
    items.map(
      item => {
        this.playlistVideos.push(item);
      }
    );
    return this.playlistVideos;
  }

}
