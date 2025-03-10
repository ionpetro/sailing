export interface Trip {
  id: number;
  sticky: boolean;
  title: string;
  name: string;
  tag1: string;
  tag2: string;
  tag3: string;
  date: string;
  location: string;
  price_amount: number;
  price_currency: string;
  rental_type: "daily" | "weekly" | "monthly";
  max_guests: number;
  description: string;
  available_from: string;
  available_until: string;
  boat?: Boat;
  boat_id?: number;
  video_url?: string;
}

export interface Boat {
  id: number;
  name: string;
  type: string;
  images: {
    url: string;
    alt: string;
  }[];
  capacity: number;
  features: {
    length: string;
    cabins: number;
    bathrooms: number;
    year: number;
  };
  length_meters: number;
  beam_meters: number;
  draft_meters: number;
  max_speed_knots: number;
  year_built: number;
  last_refit?: number;
  manufacturer: string;
  model: string;
  cabin_count: number;
  berth_count: number;
  specifications: {
    sail_area?: number;
    engine: string;
    fuel_capacity: number;
    water_capacity: number;
    navigation: string[];
    equipment?: string[];
  };
  created_at: string;
}

export interface Booking {
  id: number;
  trip_id: number;
  user_id: string;
  start_date: string;
  end_date: string;
  guest_count: number;
  total_amount: number;
  status: "pending" | "confirmed" | "cancelled";
  payment_intent_id?: string;
  created_at: string;
  trip?: Trip;
}
