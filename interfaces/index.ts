import { ReactNode } from "react";

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onClick?: () => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
}

export interface LabeledInputProps {
  label: string;
  id: string;
  placeholder: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  image?: string;
  onClick?: () => void;
}

export interface PropertyCardProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  price: string;
  rating: number;
  image: string;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
}

export interface LayoutProps {
  children: ReactNode;
}

export interface LogosProps {
  image: string;
  alt: string;
}

export interface ReviewsProps {
  id: number;
  propertyId: string;
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

export interface ReviewsSectionProps {
  propertyId: string;
}

export interface OrderSummaryProps {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

export interface BookingFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}
