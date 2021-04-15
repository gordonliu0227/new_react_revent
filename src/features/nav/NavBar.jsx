import React from "react";

import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/GordonLogo.png" alt="logo" style ={ {marginRight:"0.5em"}}></img>
        </Menu.Item>

        <Menu.Item name="Events" />
        <Menu.Item>
          <Button onClick={()=>setFormOpen(true)} positive inverted content="create event" />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content="Login" />
          <Button basic inverted content="Register" style ={ {marginLeft:"0.5em"}}/>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
