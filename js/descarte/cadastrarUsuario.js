import { Usuario } from './CadastroUsuario.js';

var ButtonCadastrarUsuario = document.querySelector('#cadastrar-usuario');

function cadastrarUsuario(e){

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nascimento = document.getElementById('nascimento').value;

    console.log(nome, senha);

    const usuario2 = new Usuario (nome, email, senha, nascimento);
    
    console.log(usuario2);

    const enviarCadastro = new XMLHttpRequest();

    enviarCadastro.addEventListener( "load", function(event) {
        alert( event.target.responseText );
      } );
  
    // Define what happens in case of error
    enviarCadastro.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    enviarCadastro.open( "POST", "http://api.metzsites.com/public/api/user" );
  
    // The data sent is what the user provided in the form
    enviarCadastro.send(usuario2);

}

ButtonCadastrarUsuario.addEventListener('click', cadastrarUsuario);