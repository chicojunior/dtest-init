import React, { Component } from 'react'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Welcome'
    }
  }

  render() {
    if (!this.props.name) {
      this.props.name = this.state.name
    }

    return(
      <div>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Detail