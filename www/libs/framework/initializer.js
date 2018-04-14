"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DietManagerApplication_1 = require("../../src/DietManagerApplication");
var routing_1 = require("../../config/routing");
var $ = require("jquery");
var app = new DietManagerApplication_1.DietManagerApplication();
var controller = routing_1.routing[document.location.pathname](this);
document.addEventListener('deviceready', function () {
    var _this = this;
    controller.initialize();
    $("div[data-fragment]").get().forEach(function (fragmentView) {
        var fragmentName = fragmentView.getAttribute("data-fragment");
        var fragment = routing_1.fragments[fragmentName](_this);
        var fragmentPath = document.location.origin + fragment.getViewName();
        if (fragmentName) {
            var xhttp_1 = new XMLHttpRequest();
            xhttp_1.onreadystatechange = function () {
                if (xhttp_1.readyState == 4) {
                    if (this.status == 200) {
                        fragmentView.innerHTML = this.responseText;
                        fragment.initialize();
                    }
                    else {
                        console.log("aaa");
                        fragmentView.innerHTML = "Page not found.";
                    }
                    fragmentView.removeAttribute("data-fragment");
                }
            };
            xhttp_1.open("GET", fragmentPath, true);
            xhttp_1.send();
        }
    });
}, false);
//# sourceMappingURL=initializer.js.map