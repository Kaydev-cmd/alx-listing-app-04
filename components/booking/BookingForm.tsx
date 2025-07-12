import React from "react";
import axios from "axios";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
      <form>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email:</label>
            <input
              type="email"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Payment Details */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number:</label>
          <input
            type="text"
            className="border p-2 w-full mt-2 rounded-lg"
            placeholder="Card Number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Expiration Date"
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="CVV"
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address:</label>
          <input
            type="text"
            className="border p-2 w-full mt-2 rounded-lg"
            placeholder="Street Address"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="City"
            />
          </div>
          <div>
            <label>State:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="State"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Zip Code"
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Country"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition-colors cursor-pointer">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
