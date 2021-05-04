import cuid from "cuid";
import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTestArea from "../../../app/common/form/MyTestArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categpryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),

    category: Yup.string().required("You must provide a category"),

    description: Yup.string().required("You must provide a descriptrion"),

    city: Yup.string().required("You must provide a city"),

    venue: Yup.string().required("You must provide a venue"),

    date: Yup.string().required("You must provide a date"),
  });
  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
      {({isSubmitting, dirty, isValid})=>(<Form className="ui form">
          <Header sub content="Event Details" color="teal" />
          <MyTextInput name="title" placeholder="Event Title" />
          <MySelectInput
            name="category"
            placeholder="Category"
            options={categoryData}
          />
          <MyTestArea name="description" placeholder="Description" rows={3} />
          <Header sub content="Event Location Details" color="teal" />
          <MyTextInput name="city" placeholder="City" />
          <MyTextInput name="venue" placeholder="Venue" />
          <MyDateInput
            name="date"
            placeholderText="Event date"
            timeFormat="HH:mm"
            showTimeSelect
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm a"
          />

          <Button type="submit" floated="right" positive content="Submit" loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} />
          <Button
          disabled={isSubmitting}
            type="submit"
            floated="right"
            content="Cancle"
            as={Link}
            to="/events"
          />
        </Form>)}
        
      </Formik>
    </Segment>
  );
}
