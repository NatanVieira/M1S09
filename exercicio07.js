"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    Aluno.prototype.cadastrar = function () {
        console.log("Nome: ".concat(this.nome, " - Idade: ").concat(this.idade, " - Rua: ").concat(this.rua, " - Matricula: ").concat(this.matricula));
        this.cadeiras.forEach(function (cadeira) {
            console.log(cadeira);
        });
    };
    return Aluno;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.cadastrar = function () {
        console.log("Nome: ".concat(this.nome, " - Idade: ").concat(this.idade, " - Rua: ").concat(this.rua, " - Identificador: ").concat(this.identificador, " - Setor: ").concat(this.setor));
    };
    return Funcionario;
}());
var aluno = new Aluno();
var funcionario = new Funcionario();
aluno.nome = 'Natanael';
aluno.idade = 27;
aluno.matricula = 4751;
aluno.rua = 'Vicente Calderari';
aluno.cadeiras = ['Angular', 'Typescript'];
funcionario.nome = 'Paulo';
funcionario.idade = 53;
funcionario.identificador = 5555;
funcionario.rua = 'Tucano';
funcionario.setor = 'Manutenção';
aluno.cadastrar();
funcionario.cadastrar();
