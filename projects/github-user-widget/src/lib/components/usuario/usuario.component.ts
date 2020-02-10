import { BuscadorUsuarioService } from './../../services/buscador-usuario.service';
import { USUARIOAPI } from './../../constants/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'guw-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  @Input()busqueda: string;
  usuario: Usuario;
  constructor(private buscadorServicio: BuscadorUsuarioService) { }

  ngOnInit() {
    if (this.busqueda === undefined || this.busqueda === null || this.busqueda === '') {
      console.log('Usando la constante');
      this.usuario = USUARIOAPI;
    } else {
      console.log('Buscando en la api', this.busqueda);
      this.buscadorServicio.obtenerDatosUsuario(this.busqueda).then(
        (data: Usuario) => {
          this.usuario = data;
        }
      );
    }
  }

}
