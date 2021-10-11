import React from "react";
import BookingForm from "../../components/booking-form/booking-form.component";
import DefaultLayout from "../../components/layouts/default-layout.component";

import "./booking.styles.scss";

const BookingPage = () => {
  return (
    <DefaultLayout
      title="New Booking"
      subtitle="Fill in the information below to get a quote or create a new booking"
    >
    <BookingForm/>
    </DefaultLayout>
  );
};

export default BookingPage;
