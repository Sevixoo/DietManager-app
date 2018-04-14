"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Fragment_1 = require("../../../libs/framework/Fragment");
var $ = require("jquery");
var DashboardTabFragment = /** @class */ (function (_super) {
    __extends(DashboardTabFragment, _super);
    function DashboardTabFragment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DashboardTabFragment.prototype.initialize = function () {
        this.welcomeMessageLabel = $("#welcome_message");
        this.welcomeMessageLabel.text("Hello world");
    };
    return DashboardTabFragment;
}(Fragment_1.Fragment));
exports.DashboardTabFragment = DashboardTabFragment;
//# sourceMappingURL=DashboardTabFragment.js.map