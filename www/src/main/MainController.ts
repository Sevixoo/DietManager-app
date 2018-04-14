import {Controller} from "../../libs/framework/Controller";

export class MainController extends Controller{

    constructor(){
        super();
    }

    initialize(): void {
         console.log("Hello world");
    }

}