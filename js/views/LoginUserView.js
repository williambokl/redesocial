class LoginUserView extends View{
 
    template(){

        return `
            <form onsubmit="">
                <h2>Acesse sua conta</h2>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="password">senha</label>
                    <input type="password" class="form-control" id="password">
                    <small id="emailHelp" class="form-text text-muted">Use uma senha dificil.</small>
                </div>
                <button style="margin-top:24px;background-color: #6495ed; border-color: #6495ed;" type="submit" class="btn btn-primary mt-4">Entrar</button>
                <button style="margin-top:24px;background-color: #ffffff; color: #6495ed; border-color: #6495ed;" type="submit" class="btn btn-primary mt-4"  onclick="userController.naoTenhoCadastro()">Fazer Cadastro</button>
            </form>
        `

    }
}