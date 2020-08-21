class UserController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._name = $('#name');
        this._email = $('#email');
        this._password = $('#password');
        this._confpassword = $('#confpassword');
        this._birthdate = $('#birthdate');

        this._registerUserView = new RegisterUserView($('#registerUserView'));
        this._loginUserView = new LoginUserView($('#registerUserView'));
        
        
    }

    criarCadastro (event) {

        event.preventDefault();
        this._comparaSenhas();
        console.log(this._comparaSenhas())
        if (this._comparaSenhas() == true) {
            console.log('senhas ok');
            this._enviaDados();
        }else{
            alert('Senhas não compativeis entre si!');
            this._password.value = '';
            this._confpassword.value = '';
            this._password.focus();
        }    
    }

    jaTenhoCadastro() {
        this._loginUserView.carregar();
    }

    naoTenhoCadastro() {
        this._registerUserView.carregar();
    }

    _enviaDados () {
        
        let data = DataHelper.textoParaData(this._birthdate.value);
        let newUser = new User (this._name.value, this._email.value, this._password.value, this._birthdate.value);
        console.log(newUser);

        const enviarCadastro = new XMLHttpRequest();

        enviarCadastro.addEventListener( "load", function(event) {
            alert( event.target.responseText );
        } );
    
        // Define what happens in case of error
        enviarCadastro.addEventListener( "error", function( event ) {
            alert( 'Opa, não consegui enviar esses dados!' );
        } );

        // Set up our request
        enviarCadastro.open( "POST", "http://api.metzsites.com/public/api/user" );
    
        // The data sent is what the user provided in the form
        enviarCadastro.send(newUser);

        this._limpaCampos();
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
}