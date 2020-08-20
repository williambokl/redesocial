class UserView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    carregar(){
        return this._elemento.innerHTML = this.template();
    }
    
    template(){

        return `            
            

        `
    }
}