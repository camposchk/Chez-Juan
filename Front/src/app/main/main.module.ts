import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FilterByCategoriaPipe } from './produtos.pipe';

@NgModule({
  declarations: [ MainComponent, FilterByCategoriaPipe ],
  imports: [ CommonModule ],
  exports: [ MainComponent ]
})

export class MainModule { }
