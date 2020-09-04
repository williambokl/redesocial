class UserService {

    constructor(){
        this._http = new HttpService();
    }

    
    enviaDadosCadastro(dadosDeUsuarioNew) {
        
        return this._http
            .post('https://meuabrigo.net/api/user', dadosDeUsuarioNew)
            .then(dadosDeUsuario => {
    
                let resposta = JSON.parse(dadosDeUsuario);
                console.log(resposta);
                if(resposta.error == ''){
                    
                    Swal.fire({
                        title: 'Cadastro!',
                        text: 'Cadastro realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Certo'
                     }) 
                }else{

                    console.log(resposta[0]);
                    Swal.fire({
                        title: 'Cadastro!',
                        text: 'Dados inválidos!',
                        icon: 'error',
                        confirmButtonText: 'Certo'
                     })
                }                
                
            }).catch(erro => {
                console.log(erro);
                throw new Error('Erro no serviço, tente mais tarde!');
            })

    }

    redirect(paginaDestino){
        return window.location = 'https://redesocial.vercel.app' + paginaDestino;
    }

    isLoggedIn () {
        const token = localStorage.getItem('token');
        return token;
    }

    autoRedirect (paginaDestino, tokenRecebido) {
        const validLogin = this.isLoggedIn();
        console.log(validLogin)
        if (validLogin == tokenRecebido) {
            this.redirect(paginaDestino);
        }else{
            this.redirect('/');
        }
    }

    enviaDadosLogin(dadosDeLogin){

        return this._http
            .post('https://meuabrigo.net/api/auth/login', dadosDeLogin)
            .then(dadosDeLogin => {

                

                let resposta = JSON.parse(dadosDeLogin);
                console.log(resposta);
                
                if(resposta.error == ''){

                    
                    console.log('Não deu erro');
                    const tokenRecebido = resposta.token;
                    console.log(tokenRecebido);
                    Swal.fire({

                        title: 'Login!',
                        text: 'Login Realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Certo'
                     })
                     
                     
                     

                     if (typeof(Storage) !== "undefined") {
                        // Store
                        localStorage.setItem("token", tokenRecebido);
                        console.log('foi')
                        this.autoRedirect('/feed.html', tokenRecebido);
                        // Retrieve
                      } else {
                        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
                      }
                     
                }else{

                    console.log(resposta[0]);
                    Swal.fire({
                        title: 'Login!',
                        text: 'Senha ou e-mail inválidos!',
                        icon: 'error',
                        confirmButtonText: 'Certo'
                     })
                }         
            }).catch(erro => {

                console.log(erro);
                throw new Error('Não foi possível enviar os dados');
            })

    }


}
