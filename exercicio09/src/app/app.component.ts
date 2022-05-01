import { Component, OnInit } from '@angular/core';
import {Produto} from '../assets/exercicio09';

class Produto1 implements Produto{
  nome: string;
  valor: number;
  codigo: number;
  quantidade: number;
  emEstoque: boolean;

  constructor (nome: string, valor: number, codigo: number, quantidade: number, emEstoque: boolean){
    this.nome = nome;
    this.valor = valor;
    this.codigo = codigo;
    this.quantidade = quantidade;
    this.emEstoque = emEstoque;
  }

  comprar(produto: Produto, qtd:number) {
      if(this.emEstoque) {
        this.quantidade -= qtd;
        if(this.quantidade <= 0)
          this.emEstoque = false;
        console.log(this.valor);
        return this.valor * qtd;
      }
      else
        return 0;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'exercicio09';
  valorTotal: number = 0;
  sofa = new Produto1("Sofá 4 lugares",120,1,30,true);
  
  ngOnInit(): void {
    this.valorTotal = this.sofa.comprar(this.sofa,30);
    this.valorTotal = this.sofa.comprar(this.sofa,10);
  }
}
