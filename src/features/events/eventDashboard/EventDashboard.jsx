import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
// import EventForm from "../eventForm/EventForm";
import { useSelector } from "react-redux";
import EventListItemPlaceholder from "./EventListItemHolder";
import EventFilter from "./EventFilter";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilter />
      </Grid.Column>
    </Grid>
  );
}
