interface Trip {
  id: number;
  sticky: boolean;
  title: string;
  name: string;
  images: {
    url: string;
    alt: string;
  }[];
  tag1: string;
  tag2: string;
  tag3: string;
  date: string;
  location: string;
  created_at: string;
  maxGuests: number;
  pricePerPerson: number;
  availableDates?: {
    start: string;
    end: string;
  };
}
