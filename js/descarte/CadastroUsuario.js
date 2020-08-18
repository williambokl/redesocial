export class Usuario {
    constructor(nome, email, senha, confSenha, birthdate){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._confSenha = confSenha;
        this._birthdate = birthdate;
        
    }

    get senha () {
        return this._senha;
    }

    autenticar(senha) {
        return this._senha == senha;
    }
}