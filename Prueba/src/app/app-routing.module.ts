import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tabla', component: TablaComponent },
  // Otras rutas aquí...
  { path: '**', redirectTo: 'login' } // Redirigir a la página de inicio de sesión si la URL no coincide con ninguna ruta
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
