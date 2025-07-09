import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import { REVIEWS } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) return <p>Property not found</p>;

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
