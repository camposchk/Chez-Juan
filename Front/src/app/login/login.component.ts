import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../client.service';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, RouterOutlet ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  hidePassword = true;
  
  constructor (public dialog: MatDialog,
    private client: ClientService,
    private http: HttpClient,
    private router: Router) { }

  username: string = ""
  password: string = ""
  nome: string = ""
  adm: boolean = false

  logar()
  {
    this.client.login({
      login: this.username,
      password: this.password,
      adm: this.adm,
      nome: this.nome

    }, (result: any) => {
      if (result == null)
      {
        alert('Senha ou usuário incorreto!')
      }
      else
      {
        console.log(result);
        sessionStorage.setItem('jwt', JSON.stringify(result.jwt));
        localStorage.setItem('IsAdm', JSON.stringify(result.adm));
        localStorage.setItem('Nome', JSON.stringify(result.nome));

        this.router.navigate(["/home"]);
      }
    });
  }
}
