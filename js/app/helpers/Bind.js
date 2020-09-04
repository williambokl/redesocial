class Bind {

    constructor (model, view, ...props){

        let proxy = ProxyFactory.create(model, props, model => view.carregar(model));
        view.carregar(model);

        return proxy;
    }
}