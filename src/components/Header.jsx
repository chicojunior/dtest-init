import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header>
    <nav>
      <ul>
        {props.routes.map((item) => <li key={item.id}><Link to={`/${item.name}`}>{item.name}</Link></li>)}
      </ul>
    </nav>
  </header>
)

export default Header