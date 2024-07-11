export interface Cafe {
  id: number;
  unique_id: string;
  phone_number: null | string;
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
