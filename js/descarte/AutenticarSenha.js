export class AutenticarSenha {
    static login (usuario, senha) {
        if(AutenticarSenha.estaCadastrado(usuario)){
            return usuario.autenticar(senha);
        }
    }

    static estaCadastrado(usuario) {
        return 'autenticar' in usuario &&
        usuario.autenticar instanceof Function;

    }
}