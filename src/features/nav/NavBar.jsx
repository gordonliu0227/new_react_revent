import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutMenu from '../nav/SignedOutMenu'
import SignedInMenu from '../nav/SignedInMenu'

export default function NavBar({setFormOpen}) {
  const[authenticated, setAuthenticated] = useState(false)  

  const history = useHistory()
  function handleSignOut(){
    setAuthenticated(false)
    history.push('/')
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src="/assets/GordonLogo.png" alt="logo" style ={ {marginRight:"0.5em"}}></img>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/events' name="Events" />
        {authenticated &&
        <Menu.Item as={NavLink} to='/createEvent '>
          <Button  positive inverted content="create event" />
        </Menu.Item>}
        {authenticated ? <SignedInMenu signOut={handleSignOut}/> :<SignedOutMenu setAuthenticated={setAuthenticated}/>}
        
        
      </Container>
    </Menu>
  );
}
