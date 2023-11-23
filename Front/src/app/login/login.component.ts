import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

}
