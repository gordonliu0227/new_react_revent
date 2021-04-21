import React from "react";
import { NavLink } from "react-router-dom";

import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src="/assets/GordonLogo.png" alt="logo" style ={ {marginRight:"0.5em"}}></img>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/events' name="Events" />
        <Menu.Item as={NavLink} to='/createEvent '>
          <Button  positive inverted content="create event" />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content="Login" />
          <Button basic inverted content="Register" style ={ {marginLeft:"0.5em"}}/>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
