import React from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label htmlFor="date">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          name="date"
          id="date"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="date">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          name="date"
          id="date"
        />
      </div>

      {/* Total Payment */}
      <div className="mt-4">
        <p>
          Total payment: <strong>${price * 7}</strong>
        </p>
      </div>

      {/* Reserve Button */}
      <button className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-green-400">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
