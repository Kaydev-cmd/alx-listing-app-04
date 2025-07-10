import { PropertyProps, ReviewsProps, OrderSummaryProps } from "@/interfaces";
import { LogosProps } from "@/interfaces";

// API URLs
export const API_URL = "htts://example.com/api";

// Config
export const DEFAULT_TIMEOUT = 5000;

// UI Text
export const UI_TEXT = {
  BUTTON_SUBMIT: "Submit",
  BUTTON_CANCEL: "Cancel",
  CARD_NO_IMAGE: "No image available",
};

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "villa-ocean-breeze",
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/listings/image_4.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "mountain-escape-chalet",
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/listings/image 6.png",
    discount: "30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "cozy-desert-retreat",
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/listings/image 7.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "city-lights-penthouse",
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/listings/image 8.png",
    discount: "15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "riverside-cabin",
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/listings/image 3.png",
    discount: "20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "modern-beachfront-villa",
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/listings/image 12.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "lakeside-chalet",
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/listings/image 17.png",
    discount: "10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "tropical-garden-villa",
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image: "/assets/listings/List 1.png",
    discount: "25",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "urban-loft",
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "assets/listings/image 18.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "secluded-forest-cabin",
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image: "/assets/listings/List 4.png",
    discount: "40",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "cliffside-villa",
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/listings/List 9.png",
    discount: "50",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "coastal-escape-villa",
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/listings/List 10.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "historical-villa",
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/listings/List 12.png",
    discount: "35",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "downtown-apartment",
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image: "/assets/listings/List 13.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "luxury-safari-lodge",
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/listings/List 14.png",
    discount: "20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "countryside-cottage",
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "/assets/listings/image_4.png",
    discount: "25",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "riverfront-mansion",
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/listings/image 6.png",
    discount: "30",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "ski-chalet",
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/listings/image 7.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "island-paradise-villa",
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/listings/image 8.png",
    discount: "60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
  {
    id: "clifftop-retreat",
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/listings/image 12.png",
    discount: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  },
];

export const HERO_BACKGROUND = "/assets/Hero/Image1.png";

export const LOGOS: LogosProps[] = [
  {
    image: "/assets/logos/apartment1.png",
    alt: "Apartment",
  },
  {
    image: "/assets/logos/barn1.png",
    alt: "Barn",
  },
  {
    image: "/assets/logos/cabin1.png",
    alt: "Cabin",
  },
  {
    image: "/assets/logos/castle-tower1.png",
    alt: "Castle Tower",
  },
  {
    image: "/assets/logos/cottage1.png",
    alt: "Cottage",
  },
  {
    image: "/assets/logos/farm1.png",
    alt: "Farm",
  },
  {
    image: "/assets/logos/home1.png",
    alt: "Home",
  },
  {
    image: "/assets/logos/island(1)1.png",
    alt: "Island",
  },
  {
    image: "/assets/logos/key-chain1.png",
    alt: "Key chain",
  },
  {
    image: "/assets/logos/living-room1.png",
    alt: "Living room",
  },
  {
    image: "/assets/logos/mansion1.png",
    alt: "Mansion",
  },
  {
    image: "/assets/logos/palm-tree1.png",
    alt: "Palm tree",
  },
  {
    image: "/assets/logos/swimming-pool1.png",
    alt: "Swimming pool",
  },
  {
    image: "/assets/logos/tent1.png",
    alt: "Tent",
  },
  {
    image: "/assets/logos/treehouse(1)1.png",
    alt: "Treehouse",
  },
  {
    image: "/assets/logos/vacations1.png",
    alt: "Vacations",
  },
  {
    image: "/assets/logos/villa1.png",
    alt: "Villa",
  },
];

export const REVIEWS: ReviewsProps[] = [
  {
    id: 1,
    propertyId: "villa-ocean-breeze",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.92,
    comment:
      "Always pretty audience look allow more could strategy leg eye imagine sound represent popular.",
  },
  {
    id: 2,
    propertyId: "villa-ocean-breeze",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.79,
    comment:
      "Color nothing main foot fish trade staff happen green energy new now film name which try service claim town paper walk their could.",
  },
  {
    id: 3,
    propertyId: "villa-ocean-breeze",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.89,
    comment:
      "Government degree give hundred many inside site threat nor how public machine international by money wall say recognize forward hear much mention improve.",
  },
  {
    id: 4,
    propertyId: "villa-ocean-breeze",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.83,
    comment:
      "Event occur radio American pass country less identify economic imagine safe design.",
  },
  {
    id: 5,
    propertyId: "mountain-escape-chalet",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.91,
    comment:
      "Than foreign adult shoulder only sister sport tend level tree must measure relationship coach summer bring measure budget agency leader manage fact reach front.",
  },
  {
    id: 6,
    propertyId: "mountain-escape-chalet",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.8,
    comment:
      "After if heart others company dream mean standard month measure be.",
  },
  {
    id: 7,
    propertyId: "mountain-escape-chalet",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.89,
    comment:
      "Project perhaps girl always as method another success structure response billion story popular front.",
  },
  {
    id: 8,
    propertyId: "mountain-escape-chalet",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.79,
    comment:
      "Seek speech memory officer color former section this wait different which national discussion series again entire continue south stuff policy sister pattern performance.",
  },
  {
    id: 9,
    propertyId: "cozy-desert-retreat",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.81,
    comment:
      "Happen assume story high base fall side go too interesting quickly soldier should protect before institution.",
  },
  {
    id: 10,
    propertyId: "cozy-desert-retreat",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.87,
    comment:
      "Rich commercial both class within red challenge toward bit go field treat.",
  },
  {
    id: 11,
    propertyId: "cozy-desert-retreat",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.65,
    comment:
      "Let can interview card final product offer force officer song exactly foot film hear.",
  },
  {
    id: 12,
    propertyId: "cozy-desert-retreat",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.7,
    comment:
      "Sometimes foreign expert night few southern administration girl family she my let teach performance decade cup box heavy who leg student your reason.",
  },
  {
    id: 13,
    propertyId: "city-lights-penthouse",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.87,
    comment:
      "Cold idea your above question gas life because doctor catch wind various official scene at hold which.",
  },
  {
    id: 14,
    propertyId: "city-lights-penthouse",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.98,
    comment:
      "Red whatever pass school yes store a operation weight half true center possible since admit paper subject security send.",
  },
  {
    id: 15,
    propertyId: "city-lights-penthouse",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.72,
    comment:
      "Page pattern physical audience west art instead him any day kind respond cup under.",
  },
  {
    id: 16,
    propertyId: "city-lights-penthouse",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.94,
    comment:
      "Future billion child no whether land Congress participant consumer data author son win school.",
  },
  {
    id: 17,
    propertyId: "riverside-cabin",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.61,
    comment:
      "Year center court sense husband present stand improve small spend think stage trial newspaper through employee wait worker maybe entire report current add reflect former.",
  },
  {
    id: 18,
    propertyId: "riverside-cabin",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.62,
    comment:
      "Third leave see me pull rule term information great result home value another performance follow around debate theory painting.",
  },
  {
    id: 19,
    propertyId: "riverside-cabin",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.78,
    comment:
      "Bring common election music film for two today sell entire anything down board.",
  },
  {
    id: 20,
    propertyId: "riverside-cabin",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.83,
    comment:
      "Bank management machine treatment mean certainly church Mrs perform environment stop machine year safe result election happen back happy anything.",
  },
  {
    id: 21,
    propertyId: "modern-beachfront-villa",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.77,
    comment:
      "Report message cost easy garden data serve he some outside person bring.",
  },
  {
    id: 22,
    propertyId: "modern-beachfront-villa",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.64,
    comment:
      "Authority officer can score lot act law future response fund call medical network some task woman different surface study in possible reason raise.",
  },
  {
    id: 23,
    propertyId: "modern-beachfront-villa",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.87,
    comment:
      "Ago bank yet remain say none item go western beautiful record only drive cost subject control back usually.",
  },
  {
    id: 24,
    propertyId: "modern-beachfront-villa",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.69,
    comment:
      "Memory blood who morning throw manage follow who pay a something season against much size.",
  },
  {
    id: 25,
    propertyId: "lakeside-chalet",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.67,
    comment:
      "Lead well walk ready animal article sit reflect carry computer walk change admit however forward trip child could scene.",
  },
  {
    id: 26,
    propertyId: "lakeside-chalet",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.67,
    comment:
      "Note theory travel drive region on yard according focus customer only form check moment night father summer last section myself interesting up rule.",
  },
  {
    id: 27,
    propertyId: "lakeside-chalet",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.73,
    comment:
      "Or effort collection option it game quickly water artist deal history feeling show special name show single whole with pass.",
  },
  {
    id: 28,
    propertyId: "lakeside-chalet",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.58,
    comment:
      "Upon ground happen fly because half anyone individual once lawyer he institution avoid reality family writer arm window commercial without part quality responsibility.",
  },
  {
    id: 29,
    propertyId: "tropical-garden-villa",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.68,
    comment:
      "Congress fire future account city large stand deep case and night goal answer mean me vote Democrat attention choice test.",
  },
  {
    id: 30,
    propertyId: "tropical-garden-villa",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.71,
    comment:
      "Upon prove factor through Mrs cut candidate pay relate very fast size school.",
  },
  {
    id: 31,
    propertyId: "tropical-garden-villa",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.71,
    comment:
      "Serious pressure southern place firm staff world finally view five every manage skill big investment decision yet couple.",
  },
  {
    id: 32,
    propertyId: "tropical-garden-villa",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.73,
    comment:
      "Half no hotel huge democratic run poor man study hard that by start at radio yes daughter capital.",
  },
  {
    id: 33,
    propertyId: "urban-loft",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.76,
    comment:
      "Young citizen your piece computer card upon young continue condition light time next whatever.",
  },
  {
    id: 34,
    propertyId: "urban-loft",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.57,
    comment:
      "Study hit international behind technology race news voice stuff commercial yet either street real car side movement relate challenge man.",
  },
  {
    id: 35,
    propertyId: "urban-loft",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.84,
    comment:
      "Young stop or next less guess wide red light nice money century total would as never.",
  },
  {
    id: 36,
    propertyId: "urban-loft",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.64,
    comment:
      "Itself clear prevent reach tell special majority time very sport catch all get look according he voice Democrat maintain look.",
  },
  {
    id: 37,
    propertyId: "secluded-forest-cabin",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.52,
    comment:
      "Wait special rule deal food deep financial require some impact whose attention board according class behind of season listen event.",
  },
  {
    id: 38,
    propertyId: "secluded-forest-cabin",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.52,
    comment:
      "Learn consumer economic history city not add responsibility audience trial state set dark would girl would chance family effect.",
  },
  {
    id: 39,
    propertyId: "secluded-forest-cabin",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.57,
    comment:
      "Real body official ready such it I apply poor significant she whatever.",
  },
  {
    id: 40,
    propertyId: "secluded-forest-cabin",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.83,
    comment:
      "Century follow six many deep nice picture cut add section popular why pick pull behind.",
  },
  {
    id: 41,
    propertyId: "cliffside-villa",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.58,
    comment:
      "Health approach agent buy style article hope system possible partner.",
  },
  {
    id: 42,
    propertyId: "cliffside-villa",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.51,
    comment:
      "Explain ground often but leg shoulder war fish international they rise before per thank open commercial clear first run dream matter response.",
  },
  {
    id: 43,
    propertyId: "cliffside-villa",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.93,
    comment:
      "Boy also power good character author of product campaign cold win mission law experience economic those late out though.",
  },
  {
    id: 44,
    propertyId: "cliffside-villa",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.67,
    comment:
      "Kitchen record when answer also central evidence young myself find effect play hour education might.",
  },
  {
    id: 45,
    propertyId: "coastal-escape-villa",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.52,
    comment:
      "Choice without finally get over attorney accept interview result candidate out professional weight must any almost stay of generation.",
  },
  {
    id: 46,
    propertyId: "coastal-escape-villa",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.6,
    comment:
      "Section thus tax wind get Mrs art husband identify series red floor everybody detail behind population author computer happy early may set mean choose break.",
  },
  {
    id: 47,
    propertyId: "coastal-escape-villa",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.72,
    comment:
      "Whether positive catch be scene suddenly take road thing total amount imagine form letter indeed artist.",
  },
  {
    id: 48,
    propertyId: "coastal-escape-villa",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.98,
    comment:
      "He reach generation try finish none likely force hope point popular common clear nor nothing tend entire by.",
  },
  {
    id: 49,
    propertyId: "historical-villa",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.66,
    comment:
      "Thank plant table send management financial away capital interesting hear.",
  },
  {
    id: 50,
    propertyId: "historical-villa",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.71,
    comment:
      "Final word can shoulder candidate part run staff Mr line establish author consumer apply able like investment.",
  },
  {
    id: 51,
    propertyId: "historical-villa",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.92,
    comment:
      "Court ago bank something blood director learn like everyone particular make material summer hard per into.",
  },
  {
    id: 52,
    propertyId: "historical-villa",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.94,
    comment:
      "Need field recently PM could material mention bed wish although upon identify four carry together arrive.",
  },
  {
    id: 53,
    propertyId: "downtown-apartment",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.72,
    comment:
      "Matter card modern itself to evidence night manager difference policy think spend if add race back account control challenge although cost three future up.",
  },
  {
    id: 54,
    propertyId: "downtown-apartment",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.51,
    comment:
      "Agree pull week should couple series author talk memory similar reduce off trip remember bar these exactly church within anything small government become manager.",
  },
  {
    id: 55,
    propertyId: "downtown-apartment",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.57,
    comment:
      "Behind worry step claim impact strong ever administration reason leader real.",
  },
  {
    id: 56,
    propertyId: "downtown-apartment",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.54,
    comment:
      "Laugh rest election summer prepare adult country big base crime generation determine start pressure behind happy street seat PM.",
  },
  {
    id: 57,
    propertyId: "luxury-safari-lodge",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.97,
    comment:
      "Stock medical PM culture although business less beautiful history find agent our model move check prevent explain our.",
  },
  {
    id: 58,
    propertyId: "luxury-safari-lodge",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.64,
    comment:
      "Necessary political relate international agreement forward between all military question majority career his produce sort yard television grow.",
  },
  {
    id: 59,
    propertyId: "luxury-safari-lodge",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.76,
    comment:
      "Mrs old to return military that word already end first eight black.",
  },
  {
    id: 60,
    propertyId: "luxury-safari-lodge",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.95,
    comment:
      "Believe environment make medical result worry offer hot teacher some call Mr four avoid fall build mission begin production ever true history music.",
  },
  {
    id: 61,
    propertyId: "countryside-cottage",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.51,
    comment:
      "Score person store beautiful poor seek right actually discover place spend cell suddenly show.",
  },
  {
    id: 62,
    propertyId: "countryside-cottage",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.52,
    comment:
      "Top face according evidence pull now chair such control southern road product most science some power.",
  },
  {
    id: 63,
    propertyId: "countryside-cottage",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.56,
    comment:
      "Southern book employee ever activity likely pick leader important information section any little from long what from.",
  },
  {
    id: 64,
    propertyId: "countryside-cottage",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.54,
    comment:
      "Try religious defense series return decision risk moment former light very federal most tell between.",
  },
  {
    id: 65,
    propertyId: "riverfront-mansion",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.53,
    comment:
      "Piece boy again admit six summer news board pick from will interest story.",
  },
  {
    id: 66,
    propertyId: "riverfront-mansion",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.79,
    comment:
      "College move deal instead phone security until help budget sing employee agency husband Mrs.",
  },
  {
    id: 67,
    propertyId: "riverfront-mansion",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.82,
    comment:
      "Type join other be property happen too street put court place industry although then take American.",
  },
  {
    id: 68,
    propertyId: "riverfront-mansion",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.65,
    comment:
      "Set kid high sort bring dinner special beat traditional easy phone most board another easy last.",
  },
  {
    id: 69,
    propertyId: "ski-chalet",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.79,
    comment:
      "Determine line next book soldier news forget your mean stand quite writer expect less sign at write various side.",
  },
  {
    id: 70,
    propertyId: "ski-chalet",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.72,
    comment:
      "Water threat common friend budget turn time policy movement economic air still next compare land.",
  },
  {
    id: 71,
    propertyId: "ski-chalet",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.77,
    comment:
      "Cut weight fire what around war do system consumer call interesting agency.",
  },
  {
    id: 72,
    propertyId: "ski-chalet",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 5.0,
    comment:
      "Time anyone range wind west new fact accept magazine him company kid opportunity address home situation present beat campaign.",
  },
  {
    id: 73,
    propertyId: "island-paradise-villa",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.71,
    comment:
      "Fast clear win cell me special ground even child blood management item while why.",
  },
  {
    id: 74,
    propertyId: "island-paradise-villa",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.61,
    comment:
      "Police subject ready manager up write station enough price yeah tough nothing either.",
  },
  {
    id: 75,
    propertyId: "island-paradise-villa",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.66,
    comment:
      "Age order technology everyone good song choose can education couple check father rich organization visit blood thank.",
  },
  {
    id: 76,
    propertyId: "island-paradise-villa",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.73,
    comment:
      "Because recognize not simple eye which television woman discuss growth modern describe stand fire each statement.",
  },
  {
    id: 77,
    propertyId: "clifftop-retreat",
    avatar: "/assets/detail/Kerry.png",
    name: "Kerry",
    rating: 4.87,
    comment:
      "Ready scientist lawyer build how likely score popular phone carry decide support feeling.",
  },
  {
    id: 78,
    propertyId: "clifftop-retreat",
    avatar: "/assets/detail/Marnie.png",
    name: "Marnie",
    rating: 4.83,
    comment:
      "Sister pay computer country offer move travel picture most goal top article across news close discuss her her couple.",
  },
  {
    id: 79,
    propertyId: "clifftop-retreat",
    avatar: "/assets/detail/Pooja.png",
    name: "Pooja",
    rating: 4.7,
    comment:
      "Million government direction agency black despite hold make item along same TV guy.",
  },
  {
    id: 80,
    propertyId: "clifftop-retreat",
    avatar: "/assets/detail/CindyxBen.png",
    name: "Cindy & Ben",
    rating: 4.52,
    comment:
      "Summer hour market start himself amount six common deal many throughout campaign sport medical finish animal continue not first speak help treatment amount painting.",
  },
];

export const BOOKING_DETAILS: OrderSummaryProps = {
  propertyName: "Villa Arrecife Beach House",
  price: 7500,
  bookingFee: 65,
  totalNights: 3,
  startDate: "24 August 2024",
};
