import React from "react";
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

export default function HomePage({history}) {
  return (
    <Segment inverted textAlign="center" vertical className="musthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          GordonLiu
        </Header>

        <Button size="huge" inverted onClick={()=>history.push('/events')}>
          Get start
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
