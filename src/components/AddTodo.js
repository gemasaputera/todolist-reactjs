import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component{
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} style={ formStyle }>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={ formInputStyle }
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="button-primary"
          style={ btnStyle }

        />
      </form>
    )
  }
}

const formInputStyle = {
  flex: 10,
  padding: '.5rem .75rem',
  borderRadius: '5px',
  border: '1px solid #4a63e1',
  marginRight: '1rem',
  marginBottom: '1rem'
}

const formStyle = {
  display: 'flex'
}

const btnStyle = {
  flex: '1',
  marginBottom: '1rem',
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
