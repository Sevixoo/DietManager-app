import {Controller} from "../libs/framework/Controller";
import {Application} from "../libs/framework/Application";
import {LoginController} from "../src/login/LoginController";
import {IndexController} from "../src/index/IndexController";

export let pages = {
    "index" : "/",
    "login_form" : "/view/login/login.html"
};

export let routing = {
    "/" : function( app : Application ) : Controller { return new IndexController() },
    "/view/login/login.html" : function( app : Application ) : Controller { return new LoginController() },
};
