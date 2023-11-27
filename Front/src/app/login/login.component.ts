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
    private http: HttpClient) { }

  username: string = ""
  password: string = ""

  logar()
  {
    this.client.login({
      login: this.username,
      password: this.password
    }, (result: any) => {
      if (result == null)
      {
        alert('Senha ou usuário incorreto!')
      }
      else
      {
        sessionStorage.setItem('jwt', JSON.stringify(result))
      }
    })
  }
}
