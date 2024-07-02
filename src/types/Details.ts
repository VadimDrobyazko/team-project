export interface Details {
  fsq_id: string;
  categories: Category[];
  chains: Chain[];
  closed_bucket: string;
  date_closed: Date;
  description: string;
  distance: number;
  email: string;
  fax: string;
  features: Features;
  geocodes: Geocodes;
  hours: Hours;
  hours_popular: Ular[];
  link: string;
  location: Location;
  menu: string;
  name: string;
  photos: Photo[];
  popularity: number;
  price: number;
  rating: number;
  related_places: RelatedPlaces;
  social_media: SocialMedia;
  stats: Stats;
  store_id: string;
  tastes: string[];
  tel: string;
  timezone: string;
  tips: Tip[];
  venue_reality_bucket: string;
  verified: boolean;
  website: string;
}

export interface Category {
  id: number;
  name: string;
  short_name: string;
  plural_name: string;
  icon: Photo;
}

export interface Photo {
  id: string;
  created_at: Date;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  classifications: string[];
  tip: Tip;
}

export interface Tip {
  id: string;
  created_at: Date;
  text: string;
  url: string;
  lang: string;
  agree_count: number;
  disagree_count: number;
}

export interface Chain {
  id: string;
  name: string;
}

export interface Features {
  payment: Payment;
  food_and_drink: FoodAndDrink;
  services: Services;
  amenities: Amenities;
  attributes: Attributes;
}

export interface Amenities {
  restroom: RelatedPlaces;
  smoking: RelatedPlaces;
  jukebox: RelatedPlaces;
  music: RelatedPlaces;
  live_music: RelatedPlaces;
  private_room: RelatedPlaces;
  outdoor_seating: RelatedPlaces;
  tvs: RelatedPlaces;
  atm: RelatedPlaces;
  coat_check: RelatedPlaces;
  wheelchair_accessible: RelatedPlaces;
  parking: Parking;
  sit_down_dining: RelatedPlaces;
  wifi: string;
}

export interface RelatedPlaces {}

export interface Parking {
  parking: RelatedPlaces;
  street_parking: RelatedPlaces;
  valet_parking: RelatedPlaces;
  public_lot: RelatedPlaces;
  private_lot: RelatedPlaces;
}

export interface Attributes {
  business_meeting: string;
  clean: string;
  crowded: string;
  dates_popular: string;
  dressy: string;
  families_popular: string;
  gluten_free_diet: string;
  good_for_dogs: string;
  groups_popular: string;
  healthy_diet: string;
  late_night: string;
  noisy: string;
  quick_bite: string;
  romantic: string;
  service_quality: string;
  singles_popular: string;
  special_occasion: string;
  trendy: string;
  value_for_money: string;
  vegan_diet: string;
  vegetarian_diet: string;
}

export interface FoodAndDrink {
  alcohol: Alcohol;
  meals: Meals;
}

export interface Alcohol {
  bar_service: RelatedPlaces;
  beer: RelatedPlaces;
  byo: RelatedPlaces;
  cocktails: RelatedPlaces;
  full_bar: RelatedPlaces;
  wine: RelatedPlaces;
}

export interface Meals {
  bar_snacks: RelatedPlaces;
  breakfast: RelatedPlaces;
  brunch: RelatedPlaces;
  lunch: RelatedPlaces;
  happy_hour: RelatedPlaces;
  dessert: RelatedPlaces;
  dinner: RelatedPlaces;
  tasting_menu: RelatedPlaces;
}

export interface Payment {
  credit_cards: CreditCards;
  digital_wallet: DigitalWallet;
}

export interface CreditCards {
  accepts_credit_cards: RelatedPlaces;
  amex: RelatedPlaces;
  discover: RelatedPlaces;
  visa: RelatedPlaces;
  diners_club: RelatedPlaces;
  master_card: RelatedPlaces;
  union_pay: RelatedPlaces;
}

export interface DigitalWallet {
  accepts_nfc: RelatedPlaces;
}

export interface Services {
  delivery: RelatedPlaces;
  takeout: RelatedPlaces;
  drive_through: RelatedPlaces;
  dine_in: DineIn;
}

export interface DineIn {
  reservations: RelatedPlaces;
  online_reservations: RelatedPlaces;
  groups_only_reservations: RelatedPlaces;
  essential_reservations: RelatedPlaces;
}

export interface Geocodes {
  drop_off: DropOff;
  front_door: DropOff;
  main: DropOff;
  road: DropOff;
  roof: DropOff;
}

export interface DropOff {
  latitude: number;
  longitude: number;
}

export interface Hours {
  display: string;
  is_local_holiday: boolean;
  open_now: boolean;
  regular: Ular[];
}

export interface Ular {
  close: string;
  day: number;
  open: string;
}

export interface Location {
  address: string;
  address_extended: string;
  admin_region: string;
  census_block: string;
  country: string;
  cross_street: string;
  dma: string;
  formatted_address: string;
  locality: string;
  neighborhood: string[];
  po_box: string;
  post_town: string;
  postcode: string;
  region: string;
}

export interface SocialMedia {
  facebook_id: string;
  instagram: string;
  twitter: string;
}

export interface Stats {
  total_photos: number;
  total_ratings: number;
  total_tips: number;
}
