import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hola-hola',
  template: `
    <p>
      hola works!
    </p>
  `,
  styles: []
})
export class HolaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
