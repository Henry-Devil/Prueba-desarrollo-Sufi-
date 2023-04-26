import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

interface User {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public error: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.getUsers().subscribe(
      (users: User[]) => {
        const user: User | undefined = users.find((user: User) => user.username === this.username && user.password === this.password);
        if (user) {
          // Inicio de sesión exitoso
          this.error = false;
          this.router.navigate(['/tabla']); // Redirigir al usuario a la página 'tabla'
        } else {
          // Mostrar mensaje de error
          this.error = true;
        }
      }
    );
  }
}