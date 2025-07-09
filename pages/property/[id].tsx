import { useEffect, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import { REVIEWS } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import axios from "axios";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details", error);
      } finally {
        setLoading(false);
      }
    };
  }, []);
  
  // const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  // if (!property) return <p>Property not found</p>;

  return (
    <div>
      <div className="flex items-center p-8">
        <PropertyDetail property={property} />
        <BookingSection price={property.price} />
      </div>
      <ReviewSection reviews={REVIEWS} />
    </div>
  );
}
