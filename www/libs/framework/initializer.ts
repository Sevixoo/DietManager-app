import {DietManagerApplication} from "../../src/DietManagerApplication"
import {fragments, routing} from "../../config/routing";
import {Controller} from "./Controller";
import * as $ from 'jquery';
import {Fragment} from "./Fragment";

let app = new DietManagerApplication();

let controller : Controller = routing[document.location.pathname](this);
document.addEventListener('deviceready', function() {
    controller.initialize();

    $("div[data-fragment]").get().forEach(fragmentView => {
        let fragmentName : string = fragmentView.getAttribute("data-fragment");
        let fragment : Fragment = fragments[fragmentName](this);
        let fragmentPath : string = document.location.origin + fragment.getViewName();
        if(fragmentName){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4) {
                    if (this.status == 200) {
                        fragmentView.innerHTML = this.responseText;
                        fragment.initialize();
                    } else {
                        fragmentView.innerHTML = "Page not found.";
                    }
                    fragmentView.removeAttribute("data-fragment");
                }
            }

            xhttp.open("GET", fragmentPath, true);
            xhttp.send();
        }

    });
}, false);