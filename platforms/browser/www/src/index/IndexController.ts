import {Controller} from "../../libs/framework/Controller";
import {pages} from "../../config/routing";

export class IndexController extends Controller{

    constructor(){
        super();
    }

    initialize(): void {
        this.navigate(pages.main_screen);
    }

}