export interface CafeDetails {
  id: number;
  reviews: Review[];
  images: Image[];
  unique_id: string;
  phone_number: string;
  address: string;
  latitude: string;
  longitude: string;
  rating: string;
  google_url: string;
  website_url: string;
  total_users_ratings: number;
  name: string;
  open_now: boolean;
  opening_hours_weekdays: string[];
  main_photo: string;
}

export interface Image {
  id: number;
  contrib_url: string;
  url: string;
  restaurant: number;
}

export interface Review {
  id: number;
  unique_name: string;
  author_name: string;
  text: string;
  rating: string;
  created_at: string;
  restaurant: number;
}
