class UserController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._registerUserView = new RegisterUserView(document.querySelector('#acessUserView'));
        
        this._name = $('#name');
        this._email = $('#email');
        this._password = $('#password');
        this._confpassword = $('#confpassword');
        this._birthdate = $('#birthdate');

        this._loginUserView = new LoginUserView(document.querySelector('#acessUserView'));
        this._loginEmail = $('#login-email');
        this._loginPassword = $('#login-password');

        
        
    }

    get name () {
        return this._name;
    }

    get email () {
        return this._email;
    }

    get password () {
        return this._password;
    }

    get birthdate () {
        return this._birthdate;
    }

    get loginEmail () {
        return this._loginEmail;
    }

    get loginPassword () {
        return this._loginPassword;
    }

    criarCadastro (event) {

        event.preventDefault();
        this._comparaSenhas();
        console.log(this._comparaSenhas())
        if (this._comparaSenhas() == true) {
            console.log('senhas ok');
            this._enviaDados();
        }else{
            Swal.fire({
                title: 'Senha errada!',
                text: 'Suas senhas não são compativéis!',
                icon: 'error',
                confirmButtonText: 'Certo'
            })
            this._password.value = '';
            this._confpassword.value = '';
            this._password.focus();
        }    
    }

    loginUsuario (event) {

        event.preventDefault();
        console.log(this._loginEmail.value);

        let loginUser = new Login (this.loginEmail.value, this.loginPassword.value);

        let body = {

            email: loginUser.email,
            password: loginUser.password
        };

        let loginUsuario = new XMLHttpRequest();

            loginUsuario.addEventListener( "load", function(event) {
            
            Swal.fire({
                title: 'Login!',
                text: loginUsuario.responseText,
                icon: 'success',
                confirmButtonText: 'Certo'
           })
            
        } );
    
        // Define what happens in case of error
        loginUsuario.addEventListener( "error", function( event ) {
            Swal.fire({
                title: 'Error!',
                text: 'Opa, não consegui enviar esses dados!',
                icon: 'error',
                confirmButtonText: 'Certo'
            });
        } );

        // Set up our request
        loginUsuario.open( "POST", "https://meuabrigo.net/api/auth/login" );

        loginUsuario.setRequestHeader("Content-type", "application/json")
    
        // The data sent is what the user provided in the form
        loginUsuario.send(JSON.stringify(body));
        
    }

    _enviaDados () {
        
        let data = DataHelper.textoParaData(this._birthdate.value);
        let newUser = new User (this.name.value, this.email.value, this.password.value, this.birthdate.value);
        
        let body = {

            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            birthdate: newUser.birthdate
        };

        let contextoEnvia = this;

        let enviarCadastro = new XMLHttpRequest();

        enviarCadastro.addEventListener( "load", function(event) {
            
            let result = JSON.parse(enviarCadastro.responseText);
                console.log(result.error);
                if(result.error == ''){
                    contextoEnvia._limpaCampos();
                    Swal.fire({
                        title: 'Cadastrado!',
                        text: 'Sucesso no cadastro!',
                        icon: 'success',
                        confirmButtonText: 'Certo'
                    })
                }else{
                    Swal.fire({
                        title: 'Revisar!',
                        text: result.error.email || result.error.password || result.error.birthdate,
                        icon: 'error',
                        confirmButtonText: 'Certo'
                    })
                }
                

             
            
        });
    
        // Define what happens in case of error
        enviarCadastro.addEventListener( "error", function( event ) {
            Swal.fire({
                title: 'Error!',
                text: 'Opa, não consegui enviar esses dados!',
                icon: 'error',
                confirmButtonText: 'Certo'
            });
        } );

        // Set up our request
        enviarCadastro.open( "POST", "https://meuabrigo.net/api/user" );

        enviarCadastro.setRequestHeader("Content-type", "application/json")
    
        // The data sent is what the user provided in the form
        enviarCadastro.send(JSON.stringify(body));

        
    }

    _comparaSenhas () {
        if(this._password.value !== this._confpassword.value){
            return false;     
            
        }
        return true;
    }

    _limpaCampos(){

        this._name.value = '';
        this._email.value = '';
        this._password.value = '';
        this._confpassword.value = '';
        this._birthdate.value = '';

        this._name.focus();
    } 

    jaTenhoCadastro() {
        this._loginUserView.carregar();
        let loginUserView = new LoginUserView(document.querySelector('#acessUserView'));
        loginUserView.carregar(); 
    }

    naoTenhoCadastro() {
        this._registerUserView.carregar();
    }

     
}