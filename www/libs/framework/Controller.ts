export abstract class Controller {

    constructor(){

    }

    public abstract initialize() : void;

    public navigate( path ) : void{
        window.location.href = path;
    }

}