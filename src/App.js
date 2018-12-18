import React, { Component } from 'react'
import './App.css'



class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = 
    {
      todosInit: [],
      todos: [],
      todoText: '',
      message: false
    }
    this.updateTodoText = this.updateTodoText.bind(this)
    this.createTodo = this.createTodo.bind(this)
  }

  componentDidMount()
  {
    this.setState({
      todos: this.state.todosInit,
    })
  }

  updateTodoText(e)
  {
    this.setState({
      todoText: e.target.value
    })
  }

  createTodo(e)
  {
    e.preventDefault()
    if(this.state.todoText !== '')
    {
      this.setState({
        todos: [...this.state.todos, this.state.todoText],
        todoText: '',
      })
    }
  }

  removeTodo(index)
  {
    this.state.todos.splice(index, 1)
    this.state.todos.join()
    return (this.setState({ todos: this.state.todos }))
  }

  render() {
    return (
      <div id="reactContainer">
        <div className="container top">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center">Shopping list</h2>
            </div>
          </div>
        </div>

        <div className="container wb">
          <div className="row">
            <form onSubmit={this.createTodo}>
              <div className="col-lg-12 input-group">
                <input 
                type="text" 
                className="center-block" 
                placeholder="Insert item..." 
                value={this.state.todoText} 
                onChange={this.updateTodoText}
                />
                <button className="btn btn-success center-block">Create</button>
              </div>
            </form>
            <ul>
              {this.state.todos.map((todo, index) => 
                {
                  return (<li key={index} >{todo}&nbsp;
                  <button 
                  className="btn btn-danger"
                  onClick={() => this.removeTodo(index) }
                  >Remove</button></li>)
                }
              )}
              {this.state.message ? <li>No search result!</li> : ''}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App
