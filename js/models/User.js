class User {

    constructor(name, email, password, birthdate){
        this._name = name;
        this._email = email;
        this._password = password;
        this._birthdate = new Date(birthdate);
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
        return new Date(this._birthdate.getTime());
     
    }

}