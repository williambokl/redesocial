import { Usuario } from './CadastroUsuario.js';
import { AutenticarSenha } from './AutenticarSenha.js';

var ButtonLogin = document.querySelector('#login-usuario');

function realizarLogin(){
    const senhaLogin = document.getElementById('login-senha').value;

    const usuario3 = new Usuario ();

    const estadoLogin = AutenticarSenha.login(usuario3, senhaLogin);
    console.log(estadoLogin);

}

ButtonLogin.addEventListener('click', realizarLogin);