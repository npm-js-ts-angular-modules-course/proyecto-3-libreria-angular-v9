import { Video } from './../interfaces/video';
import { ModalVideoComponent } from './../components/modal-video/modal-video.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NgbModal) { }

  show(video: Video) {
    const modalRef = this.modal.open(ModalVideoComponent);
    modalRef.componentInstance.video = video;
  }
}
