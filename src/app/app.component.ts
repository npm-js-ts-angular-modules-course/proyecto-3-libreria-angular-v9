import { ApiService } from 'ng-youtube-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libreriasAngular';

  constructor(private api: ApiService) {}

}
