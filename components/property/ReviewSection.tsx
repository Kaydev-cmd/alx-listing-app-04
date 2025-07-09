import React from "react";
import { ReviewsProps } from "@/interfaces";
import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC<{ reviews: ReviewsProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-2 p-6">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      <div className="grid grid-cols-2 gap-2">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 mb-4 w-[600px]">
            <div className="flex items-center mb-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="font-bold text-xl">{review.name}</p>
            </div>
            <p>{review.comment}</p>
            <p className="flex items-center gap-2 mt-2 font-semibold">
              {" "}
              <FaStar color="#FAC02B" />
              {review.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
