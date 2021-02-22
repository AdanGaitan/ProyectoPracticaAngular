import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path:'',component:TitulosComponent},
  { path:'pipes',component:PipesComponent},
  { path:'ejemplo',component:EjemploComponent},
  { path:'directiva',component:DirectivaComponent},
  { path:'usuario',component:UsuariosComponent,children:
    [
      { path:'agregar',component:AgregarUsuarioComponent},
      { path:'editar',component:EditarUsuarioComponent}
    ]
  },
  { path:'articulo',component:ArticuloComponent},
  { path:'articuloDetalle',component:ArticuloDetalleComponent},
  { path:'**',component:Pagina404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
