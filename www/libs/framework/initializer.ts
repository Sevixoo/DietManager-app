import {DietManagerApplication} from "../../src/DietManagerApplication"
import {fragments, routing} from "../../config/routing";
import {Controller} from "./Controller";
import * as $ from 'jquery';
import {Fragment} from "./Fragment";

let app = new DietManagerApplication();
app.initialize();

let controller : Controller = routing[document.location.pathname](app);

let onDeviceReady = function() {
    controller.initialize();
    $("div[data-fragment]").get().forEach(fragmentView => {
        let fragmentName : string = fragmentView.getAttribute("data-fragment");
        let fragment : Fragment = fragments[fragmentName](app);
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
                    fragmentView.removeAttribute("provider-fragment");
                }
            }

            xhttp.open("GET", fragmentPath, true);
            xhttp.send();
        }

    });
};

document.addEventListener("deviceready", onDeviceReady, false);

/*if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    document.addEventListener("deviceready", onDeviceReady, false);
} else {
    onDeviceReady();
}*/