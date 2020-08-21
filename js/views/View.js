class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model){

        throw new Error('Voce deve estanciar o metódo template na classe filha');
    }

    carregar(model){
        this._elemento.innerHTML = this.template(model);
    }
}