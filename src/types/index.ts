export interface MenuItem {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface StatItem {
  value: string;
  label: string;
}
