import React, { useState } from "react";
import Booking from "../Components/Booking/Booking";
import Banner from "../Components/Banner/Banner";

function BookingPage() {
  return (
    <>
      <Banner title={"Booking"} />
      <Booking widthPage="40%" />
    </>
  );
}
export default BookingPage;
