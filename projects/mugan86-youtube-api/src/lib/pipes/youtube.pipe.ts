import { VIDEOEMBED } from './../constants/urls';
import { DomSecurePipe } from './dom-secure.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: string): any {
    return new DomSecurePipe(this.domSanitizer).transform(value, VIDEOEMBED);
  }

}
