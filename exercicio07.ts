import {Pessoa} from './interface';
class Aluno implements Pessoa{
    nome: string;
    idade: number;
    rua: string;
    matricula: number;
    cadeiras: string[];

    cadastrar(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade} - Rua: ${this.rua} - Matricula: ${this.matricula}`);
        this.cadeiras.forEach(cadeira => {
            console.log(cadeira);
        });
    }
}

class Funcionario implements Pessoa{
    nome: string;
    idade: number;
    rua: string;
    identificador: number;
    setor: string;

    cadastrar(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade} - Rua: ${this.rua} - Identificador: ${this.identificador} - Setor: ${this.setor}`);
    }
}


let aluno = new Aluno();
let funcionario =  new Funcionario();

aluno.nome = 'Natanael';
aluno.idade = 27;
aluno.matricula = 4751;
aluno.rua = 'Vicente Calderari';
aluno.cadeiras = ['Angular','Typescript'];

funcionario.nome = 'Paulo';
funcionario.idade = 53;
funcionario.identificador = 5555;
funcionario.rua = 'Tucano';
funcionario.setor = 'Manutenção';

aluno.cadastrar();
funcionario.cadastrar();