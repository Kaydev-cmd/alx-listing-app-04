import React from "react";
import axios from "axios";
import { useState } from "react";
import { BookingFormProps } from "@/interfaces";

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: {
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (
      name === "streetAddress" ||
      name === "city" ||
      name === "state" ||
      name === "zipCode" ||
      name === "country"
    ) {
      setFormData((prev) => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      cardNumber,
      expirationDate,
      cvv,
      billingAddress,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !cardNumber ||
      !expirationDate ||
      !cvv ||
      !billingAddress
    ) {
      return "Please fill in all fields";
    }
    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/bookings/bookings", formData);
      setSuccess("Booking confirmed!!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: {
          streetAddress: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        },
      });
    } catch (error) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Payment Details */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            className="border p-2 w-full mt-2 rounded-lg"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date:</label>
            <input
              type="text"
              name="expirationDate"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Expiration Date"
              value={formData.expirationDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address:</label>
          <input
            type="text"
            name="streetAddress"
            className="border p-2 w-full mt-2 rounded-lg"
            placeholder="Street Address"
            value={formData.billingAddress.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="City"
              value={formData.billingAddress.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>State:</label>
            <input
              type="text"
              name="state"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="State"
              value={formData.billingAddress.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code:</label>
            <input
              type="text"
              name="zipCode"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Zip Code"
              value={formData.billingAddress.zipCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              className="border p-2 w-full mt-2 rounded-lg"
              placeholder="Country"
              value={formData.billingAddress.country}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition-colors cursor-pointer"
        >
          {loading ? "Processing..." : "Click & Pay"}
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && (
          <p className="text-green-600 text-center mt-4">{success}</p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
