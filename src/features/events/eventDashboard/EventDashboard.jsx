import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
// import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  // function handleCreateEvents(event) {
  //   setEvents([...events, event]);
  // }

  // function handleUpdateEvent(updateEvent) {
  //   setEvents(
  //     events.map((evt) => (evt.id === updateEvent.id ? updateEvent : evt))
  //   );
  // }

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>event filters</h2>
      </Grid.Column>
    </Grid>
  );
}
