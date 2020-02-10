import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscadorUsuarioComponent } from './components/buscador-usuario/buscador-usuario.component';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';

const COMPONENT = [UsuarioComponent, BuscadorUsuarioComponent];
@NgModule({
  declarations: COMPONENT,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: COMPONENT
})
export class GithubUserWidgetModule { }
