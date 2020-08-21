class RegisterUserView extends View{
 
    template(model){

        return `
    
            <form onsubmit="userController.criarCadastro(event)">
                <h2>Faça seu cadastro</h2>
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="password">Nova senha</label>
                    <input type="password" class="form-control" id="password">
                    <small id="emailHelp" class="form-text text-muted">Use uma senha dificil.</small>
                </div>
                <div class="form-group">
                    <label for="confpassword">Confirmar senha</label>
                    <input type="password" class="form-control" id="confpassword">
                </div>
                <div class="form-group">
                    <label for="birthdate">Data de nascimento</label>
                    <input type="date" class="form-control" id="birthdate">
                </div>
                <button style="margin-top:24px;background-color: #6495ed; border-color: #6495ed;" type="submit" class="btn btn-primary mt-4">Cadastrar</button>
                <button style="margin-top:24px;background-color: #ffffff; color: #6495ed; border-color: #6495ed;" class="btn btn-primary mt-4" type="button" onclick="userController.jaTenhoCadastro()">Já tenho cadastro</button>
            </form>
        `

    }
}