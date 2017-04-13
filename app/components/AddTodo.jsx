var React = require('react');

var AddTodo = React.createClass({
  handleTodoSubmit: function (e) {
    e.preventDefault();
    var todo = this.refs.todoText.value;
    if (todo.length > 0) {
      this.refs.todoText.value = "";
      this.props.onAddTodo(todo);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleTodoSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
