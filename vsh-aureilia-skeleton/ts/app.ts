import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  router; //needed in TS
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' }
    ]);

    this.router = router;
  }
} 