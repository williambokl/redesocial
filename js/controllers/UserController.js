class UserController {
    constructor(){
        let $ = document.querySelector.bind(document);
        this._name = $('#name');
        this._email = $('#email');
        this._password = $('#password');
        this._confpassword = $('#confpassword');
        this._birthdate = $('#birthdate');
    }

    enviarDados (event) {
        event.preventDefault();

        let data = new Date(...this._birthdate.value
            .split('-')
            .map((item,indice) => item - indice % 2)
        );
       
        console.log(data);

        if(this._password.value != this._confpassword.value){
            return alert('Senhas não compativeis entre si!');
        }
        let newUser = new User (this._name.value, this._email.value, this._password.value, data);
        console.log(data);
        console.log(newUser);
        
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
        enviarCadastro.send(newUser);

        this._name.value = '';
        this._email.value = '';
        this._password.value = '';
        this._confpassword.value = '';
        this._birthdate.value = '';

        this._name.focus();
        

    }
}