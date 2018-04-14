import {Controller} from "../libs/framework/Controller";
import {Application} from "../libs/framework/Application";
import {LoginController} from "../src/login/LoginController";
import {IndexController} from "../src/index/IndexController";
import {Fragment} from "../libs/framework/Fragment";
import {MainController} from "../src/main/MainController";
import {DashboardTabFragment} from "../src/main/dashboard/DashboardTabFragment";
import {ProfileTabFragment} from "../src/main/profile/ProfileTabFragment";
import {DietTabFragment} from "../src/main/diet/DietTabFragment";
import {StatsTabFragment} from "../src/main/stats/StatsTabFragment";

export let pages = {
    "index" : "/",
    "login_form" : "/view/login/login.html",
    "main_screen" : "/view/main/main.html"
};

export let routing = {
    "/" : function( app : Application ) : Controller { return new IndexController() },
    "/view/login/login.html" : function( app : Application ) : Controller { return new LoginController() },
    "/view/main/main.html" : function( app : Application ) : Controller { return new MainController() }
};

export let fragments = {
    "main_tab1_fragment" : function( app : Application ) : Fragment { return new DashboardTabFragment("/view/main/dashboard/dashboard.html") },
    "main_tab2_fragment" : function( app : Application ) : Fragment { return new DietTabFragment("/view/main/diet/diet.html") },
    "main_tab3_fragment" : function( app : Application ) : Fragment { return new StatsTabFragment("/view/main/stats/stats.html") },
    "main_tab4_fragment" : function( app : Application ) : Fragment { return new ProfileTabFragment("/view/main/profile/profile.html") }
}
