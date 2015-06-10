define(["require", "exports", 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=appts.js.map