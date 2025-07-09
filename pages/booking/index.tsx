import BookingForm from "@/components/booking/BookingForm";
import React from "react";
import { BOOKING_DETAILS } from "@/constants";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const BookingPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <BookingForm />
        <OrderSummary {...BOOKING_DETAILS} />
        <CancellationPolicy />
      </div>
    </div>
  );
};

export default BookingPage;
