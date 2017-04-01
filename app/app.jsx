var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hasHistory} = require('react-router');

// load foundation

$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <p>Boilerplate 3 App</p>,
  document.getElementById('app')
);
