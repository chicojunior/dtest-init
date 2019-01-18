import React from 'react';
import { Route } from 'react-router-dom'

import Detail from './Detail'

const Main = (props) => {
  let routes = props.routes

  return(
    <div>
      <main>
          {
            routes.map((item) => {
              return <Route key={item.id} path={`/${item.name}`} render={() => <Detail name={item.name}/>} />
            })
          }
      </main>
    </div>
  )
  
}

export default Main