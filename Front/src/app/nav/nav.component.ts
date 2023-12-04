import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private renderer: Renderer2, public dialog: MatDialog) { }
  
  showFiller = false;
  isAdmin: boolean = false;
  meuNome: string = "";

  ngOnInit() {
    const admValue = localStorage.getItem('IsAdm');
    this.isAdmin = admValue ? JSON.parse(admValue) : false;
    const nomeValue = localStorage.getItem('Nome');
    this.meuNome = nomeValue ? JSON.parse(nomeValue) : "Usuário";
  }

  addTremorEffect() {
    const textElements = document.querySelectorAll('.tremor-text');
    textElements.forEach(element => {
      if (element) {
        element.classList.add('shake');
      }
    });
  }

  scrollToDestination(destinationId: string) {
    const destinationElement = this.renderer.selectRootElement(destinationId, true);
    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  abrirCadastroProduto()
  {
    this.dialog.open(cadastroProduto);
  }

  abrirCarrinho()
  {
    this.dialog.open(carrinho);
  }
}

interface Categoria {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './cadastroProdutos.html',
  styleUrl: './nav.component.css'
})
export class cadastroProduto
{
  nome: string = ""
  preco: number = 0
  selected: number = 0

  categorias: Categoria[] = [
    {value: 0, viewValue: 'Couverts'},
    {value: 1, viewValue: 'Entradas'},
    {value: 2, viewValue: 'Principais'},
    {value: 3, viewValue: 'Sobremesas'},
    {value: 4, viewValue: 'Vinhos'},
  ];

  constructor(public dialogRef: MatDialogRef<cadastroProduto>, public product: ProductService) {}

  cadastrar()
  {
    this.product.cadastrar({
      nome: this.nome,
      preco: this.preco,
      categoria: this.selected
    })
    this.dialogRef.close()
  }
}

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './carrinho.html',
  styleUrl: './nav.component.css'
})
export class carrinho
{
  nome: string = ""
  preco: number = 0


  constructor(public dialogRef: MatDialogRef<carrinho>, public product: ProductService) {}

  finalizar()
  {
    this.dialogRef.close()
  }
}
