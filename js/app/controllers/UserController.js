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

    fazLogin(event){

        event.preventDefault();

        let loginEmail = this.loginEmail.value;
        let loginPassword = this.loginPassword.value;
        let body = {

            email: loginEmail,
            password: loginPassword,
        };

        let userService = new UserService();
        userService.enviaDadosLogin(body);
        

    }

    acessaMensagens(event){

        event.preventDefault();

        let userService = new UserService();
        
        userService.autoRedirect('/mensagem.html', tokenRecebido);

    }

    acessaFeed(event){

        event.preventDefault();

        let userService = new UserService();
        userService.autoRedirect('/feed.html', 'tokenRecebido');

    }

    enviaNovosDados(event){

        event.preventDefault();

        if(this._comparaSenhas() == true){

            let newUser = new User (this.name.value, this.email.value, this.password.value, this.birthdate.value); 
            let body = {

                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                birthdate: newUser.birthdate
            };

            let userService = new UserService();
            userService.enviaDadosCadastro(body);
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
        
    }

    naoTenhoCadastro() {
        this._registerUserView.carregar();
    }

    

     
}