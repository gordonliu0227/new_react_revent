/*global google */
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
import MyPlaceInput from "../../../app/common/form/MyPlaceInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: {
      address: "",
      latLng: null,
    },
    venue: {
      address: "",
      latLng: null,
    },
    date: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),

    category: Yup.string().required("You must provide a category"),

    description: Yup.string().required("You must provide a descriptrion"),

    city: Yup.object().shape({
      address: Yup.string().required("City is required"),
    }),

    venue: Yup.object().shape({
      address: Yup.string().required("Venue is required"),
    }),

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
        {({ isSubmitting, dirty, isValid, values }) => (
          <Form className="ui form">
            <Header sub content="Event Details" color="teal" />
            <MyTextInput name="title" placeholder="Event Title" />
            <MySelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <MyTestArea name="description" placeholder="Description" rows={3} />
            <Header sub content="Event Location Details" color="teal" />

            <MyPlaceInput name="city" placeholder="City" />
            <MyPlaceInput
              name="venue"
              placeholder="Venue"
              disabled={!values.city.latLng}
              options={{ location: new google.maps.LatLng(values.city.latLng),
              radius:1000,
              types:['establishment'] }}
            />
            <MyDateInput
              name="date"
              placeholderText="Event date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />

            <Button
              type="submit"
              floated="right"
              positive
              content="Submit"
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              floated="right"
              content="Cancle"
              as={Link}
              to="/events"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
