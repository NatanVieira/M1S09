import { Component, OnInit } from '@angular/core';
import {Aluno, Nota} from '../assets/exercicio10';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'exercicio10';
  media: number = 0;
  passou: boolean = false;

  ngOnInit(): void {
    let aluno1: Aluno = new Aluno("Jonas", 7);
    let notas: Nota[] = [
        {
            cadeira: "Geografia",
            ponto: 4,
            aluno: aluno1
        },
        {
            cadeira: "Geografia",
            ponto: 8,
            aluno: aluno1
        },
        {
            cadeira: "Geografia",
            ponto: 3,
            aluno: aluno1
        },
        {
            cadeira: "Geografia",
            ponto: 10,
            aluno: aluno1
        }
    ]
    let contaNotas:number = 0;
    let somaNotas:number = 0;

    notas.forEach((nota) => {
      contaNotas++;
      somaNotas += nota.ponto;
    })

    this.media = Number(somaNotas / contaNotas);
    this.passou = aluno1.aprovado(this.media);
  }
}
