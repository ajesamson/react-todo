var React = require('react');
var ReactDOM = require('react-dom');
var {Router, IndexRoute, Route, hasHistory} = require('react-router');

var TodoApp = require('TodoApp');

// load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
