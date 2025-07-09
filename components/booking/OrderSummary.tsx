import React from "react";
import { OrderSummaryProps } from "@/interfaces";
import { FaStar } from "react-icons/fa";

const OrderSummary: React.FC<OrderSummaryProps> = ({
  propertyName,
  price,
  bookingFee,
  totalNights,
  startDate,
}) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold">Review Order Details</h2>
      <div className="flex flex-col mt-4">
        <img
          src="/assets/listings/image_4.png"
          alt="Property"
          className="w-full  object-cover rounded-md"
        />
        <div className="mt-4 flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">{propertyName}</h3>
          <p className="text-md text-gray-500 flex items-center gap-2">
            <FaStar color="#FAC02B" /> 4.76 (345 reviews)
          </p>
          <div className="flex itemss-center gap-3">
            <p className="text-md text-gray-500 bg-[#F7F7F7] p-1 rounded-md">
              {startDate}
            </p>
            <p className="text-md text-gray-500 bg-[#F7F7F7] p-1 rounded-md">
              {totalNights} Nights
            </p>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="text-[#8F8F8F] font-semibold">Booking Fee</p>
          <p>${bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[#8F8F8F] font-semibold">Sub Total</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between mt-2 font-bold">
          <p>Grand Total</p>
          <p>${bookingFee + price}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
