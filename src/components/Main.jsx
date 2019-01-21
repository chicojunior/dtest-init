import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Detail from './Detail'

class Main extends Component {

  render() {
    const routes = []

    routes.push(<Route key='0' exact path='/' render={() => <Detail name='Bem vindo'/>}></Route>)

    this.props.routes.forEach(route => {
      routes.push(<Route key={route.id} path={`/${route.name}`} render={() => <Detail name={route.name}/>}></Route>) 
    })

    return<main className="container">{ routes }</main>

  }

}


export default Main