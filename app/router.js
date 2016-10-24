import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('author', { path: '/'});
  this.route('publishing-houses');
  this.route('books', { path: '/' });
});

export default Router;
