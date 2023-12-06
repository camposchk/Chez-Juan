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
import { CartService } from './../cart.service';
import { CouponService } from './../coupon.service';
import { ProductData } from '../product-data';
import { CouponData } from '../coupon.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private renderer: Renderer2, public dialog: MatDialog, private router: Router) { }
  
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

  scrollToDestination(destinationName: string) {
    const destinationElement = document.getElementById(destinationName.toLowerCase());
    if (destinationElement) {
      destinationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  cupons()
  {
    console.log("cupons");
    this.router.navigate(["/cupons"]);
  }

  abrirCadastroProduto()
  {
    this.dialog.open(cadastroProduto);
  }

  abrirCarrinho()
  {
    this.dialog.open(carrinho);
  }

  abrirCadastroCupom()
  {
    this.dialog.open(cadastroCupom);
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
    window.location.reload()
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

  items: ProductData[] = [];

  public total: number = 0;
  cupomInserido: string = '';
  descontoAplicado: number = 0;
  mensagemErro: string = '';

  flag = false;


  constructor(public dialogRef: MatDialogRef<carrinho>, public product: ProductService, private cartService: CartService, private couponService: CouponService) {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.preco, 0);
  }

  aplicarCupom() {


    console.log(this.cupomInserido);
    this.couponService.verificarCupom(this.cupomInserido).subscribe(
      cupom => {
        if (cupom && !this.flag) {
          this.descontoAplicado = cupom.isPercentage ? this.total * (cupom.valor / 100) : cupom.valor;
          this.total -= this.descontoAplicado;
          this.mensagemErro = '';
          this.flag = true;
        } else if(this.flag) {
          this.mensagemErro = 'Cupom já aplicado.';
          this.descontoAplicado = 0;
        } else {
          this.mensagemErro = 'Cupom inválido.';
          this.descontoAplicado = 0;
        }
      },
      erro => {
        this.mensagemErro = 'Erro ao verificar o cupom.';
        this.descontoAplicado = 0;
      }
    );
  }

  finalizar()
  {
    this.dialogRef.close()
  }
}

@Component({
  selector: 'app-cadastro-cupom',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule, MatSelectModule, MatIconModule],
  templateUrl: './cadastroCupom.html',
  styleUrl: './nav.component.css'
})
export class cadastroCupom
{
  codigo: string = ""
  valor: number = 0
  isPercent: boolean = false;

  constructor(public dialogRef: MatDialogRef<cadastroCupom>, public cupom: CouponService) { }
 
  toggleIcon() {
    this.isPercent = !this.isPercent;
  }
  
  cadastrar()
  {
    this.cupom.cadastrar({
      codigo: this.codigo,
      valor: this.valor,
      isPercentage: this.isPercent
    })
    this.dialogRef.close()
  }
}
