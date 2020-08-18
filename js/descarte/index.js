import { Usuario } from './CadastroUsuario.js';
import { AutenticarSenha } from './AutenticarSenha.js'

const usuario1 = new Usuario('William', 'williambokl@hotmail.com', 'terratv2', '09-01-1993');

const estadoUsuario = AutenticarSenha.login(usuario1, 'terratv2');

console.log('oi');
console.log(usuario1);
console.log(estadoUsuario);