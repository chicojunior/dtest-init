import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Main from './components/Main'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      error: ''
    }
  }

  componentDidMount() {

    fetch('api.json')
      .then(res => res.json())
      .catch(err => {
        err.json().then(errorMessage => {
          this.setState({
            error: errorMessage
          })
        })
      })
      .then(data => {
        this.setState({
          routes: data
        })
      })

  }

  render() {
    return (
      <div>
        <Header routes={this.state.routes}/>
        <Main routes={this.state.routes}/>
      </div>
    );
  }
}

export default App;
