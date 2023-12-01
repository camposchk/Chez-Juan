import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule , MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule, FormsModule, MatSlideToggleModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  hidePassword = true;
  
  adm: boolean = false
  username: string = ""
  password: string = ""
  nome: string = ""
  repeatPassword: string = ""

  onToggleChange() {
    this.adm = !this.adm;
  }

  constructor(private client: ClientService, private router: Router) {}

  create()
  {
    if (this.password === this.repeatPassword)
    {
      this.client.register({
        login: this.username,
        password: this.password,
        adm: this.adm,
        nome: this.nome
      })
      this.router.navigate(["/"]);
    }
    else
    {
      alert("As senhas precisam ser iguais")
    }
  }
}
