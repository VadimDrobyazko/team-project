export interface Cafe {
  fsq_id: string;
  name: string;
  categories: {
    id: number;
    name: string;
    short_name: string;
    plural_name: string;
    icon: {
      prefix: string;
      suffix: string;
    };
  }[];
  chains: any[];
  closed_bucket: string;
  distance: number;
  geocodes: {
    main: {
      latitude: number;
      longitude: number;
    };
  };
  link: string;
  location: {
    address: string;
    country: string;
    cross_street: string;
    formatted_address: string;
    locality: string;
    region: string;
  };
  related_places: {
    parent: {
      fsq_id: string;
      categories: {
        id: number;
        name: string;
        short_name: string;
        plural_name: string;
        icon: {
          prefix: string;
          suffix: string;
        };
      }[];
      name: string;
    };
  };
  timezone: string;
}
