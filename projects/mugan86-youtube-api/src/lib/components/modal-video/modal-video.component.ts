import { Video } from './../../interfaces/video';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mugan86-yt-api-modal-video',
  templateUrl: './modal-video.component.html',
  styles: []
})
export class ModalVideoComponent {

  @Input() video: Video;
  constructor(public modalService: NgbActiveModal) { }

}
