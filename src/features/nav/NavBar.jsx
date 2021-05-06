import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutMenu from '../nav/SignedOutMenu'
import SignedInMenu from '../nav/SignedInMenu'
import { useSelector } from "react-redux";

export default function NavBar({setFormOpen}) {

  const {authenticated} = useSelector(state=>state.auth)


  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src="/assets/GordonLogo.png" alt="logo" style ={ {marginRight:"0.5em"}}></img>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/events' name="Events" />
        
        <Menu.Item as={NavLink} to='/sandbox' name="sandbox" />
        {authenticated &&
        <Menu.Item as={NavLink} to='/createEvent'>
          <Button  positive inverted content="create event" />
        </Menu.Item>}
        {authenticated ? <SignedInMenu /> :<SignedOutMenu />}
        
        
      </Container>
    </Menu>
  );
}
