# Librería Github User Widget

Muestra la información de un usuario de Github haciendo uso de la librería de la API. La librería está desarrollada en Angular.

## Instrucciones

Hay que seguir las siguientes instrucciones para un correcto uso de la librería

### Instalación

```npm install github-user-widget```

### Configuración

En el app.module.ts (por defecto) tenemos que importar el módulo de la librería **"GithubUserWidgetModule"**

```
import { GithubUserWidgetModule } from 'github-user-widget';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubUserWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Añadir estilos
En src/styles de la app principal importamos
```
@import './../node_modules/github-user-widget/lib/assets/styles/styles.css';
```
### Uso
* Con buscador
```
<guw-buscador-usuario></guw-buscador-usuario>
```

* Sin buscador
```
<guw-usuario [busqueda]="<usuario_a_buscar>"></guw-usuario>
```
