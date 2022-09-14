"use strict";
exports.__esModule = true;
exports.Routes = void 0;
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route('/')
            .get(function (req, res) {
            res.status(200).send({
                message: '/request!'
            });
        });
        app.route('/contact')
            .get(function (req, res) {
            res.status(200).send({
                message: '/contact request!'
            });
        })
            .post(function (req, res) {
            res.status(200).send({
                message: '/contact POST request!'
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
