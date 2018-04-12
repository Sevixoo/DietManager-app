import {DietManagerApplication} from "../../src/DietManagerApplication"
import {routing} from "../../config/routing";
import {Controller} from "./Controller";


let app = new DietManagerApplication();
let controller : Controller = routing[document.location.pathname].call(this);

document.addEventListener('deviceready', function() {
    controller.initialize();
}, false);