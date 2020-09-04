class MainController {

    constructor(){

        this._viewMain = new MainView (document.querySelector('#mainView'));
        this._viewMain.carregar();
    }
}