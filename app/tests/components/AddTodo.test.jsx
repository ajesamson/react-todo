var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call handleSubmit when a valid input is provided', () => {
    var todoText = "New todo";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });


    it('should not call handleSubmit when invalid input is provided', () => {
      var todoText = "";
      var spy = expect.createSpy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
});
