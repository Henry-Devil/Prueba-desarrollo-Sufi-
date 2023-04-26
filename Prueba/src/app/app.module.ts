import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TablaComponent } from './tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para solicitudes HTTP

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Agrega ReactiveFormsModule
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule // Agrega HttpClientModule para solicitudes HTTP
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }