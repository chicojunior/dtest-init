import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Header = (props) => (
  <header>
    <List component="nav">
      {
        props.routes.map((item) => {
          return(
            <Link key={item.id} to={`/${item.name}`}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          )
        })  
      }
    </List>
  </header>
)

export default Header