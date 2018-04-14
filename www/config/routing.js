"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginController_1 = require("../src/login/LoginController");
var IndexController_1 = require("../src/index/IndexController");
var MainController_1 = require("../src/main/MainController");
var DashboardTabFragment_1 = require("../src/main/dashboard/DashboardTabFragment");
var ProfileTabFragment_1 = require("../src/main/profile/ProfileTabFragment");
var DietTabFragment_1 = require("../src/main/diet/DietTabFragment");
var StatsTabFragment_1 = require("../src/main/stats/StatsTabFragment");
exports.pages = {
    "index": "/",
    "login_form": "/view/login/login.html",
    "main_screen": "/view/main/main.html"
};
exports.routing = {
    "/": function (app) { return new IndexController_1.IndexController(); },
    "/view/login/login.html": function (app) { return new LoginController_1.LoginController(); },
    "/view/main/main.html": function (app) { return new MainController_1.MainController(); }
};
exports.fragments = {
    "main_tab1_fragment": function (app) { return new DashboardTabFragment_1.DashboardTabFragment("/view/main/dashboard/dashboard.html"); },
    "main_tab2_fragment": function (app) { return new DietTabFragment_1.DietTabFragment("/view/main/diet/diet.html"); },
    "main_tab3_fragment": function (app) { return new StatsTabFragment_1.StatsTabFragment("/view/main/stats/stats.html"); },
    "main_tab4_fragment": function (app) { return new ProfileTabFragment_1.ProfileTabFragment("/view/main/profile/profile.html"); }
};
//# sourceMappingURL=routing.js.map