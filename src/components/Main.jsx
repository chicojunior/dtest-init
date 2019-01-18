import React from 'react';
import { Route } from 'react-router-dom'

import Detail from './Detail'

const Main = (props) => {
  return(
    <div>
      <main>
        {
          props.routes.map((item) => {
            return <Route key={item.id} path={`/${item.name}`} render={() => <Detail name={item.name}/>}></Route>
          })
        }
      </main>
    </div>
  )
  
}

export default Main