// interface/index.ts
export interface Product {
  imageSrc: string;
  title: string;
  price: number;
  initialPrice: number;
  rate: number;
}

export interface Device {
  imageSrc: string;
  name: string;
  id: number;
}

export interface LimitedTimeOfferProps {
  heading: string;
  subtitle: string;
  countdown: {
    hours: number;
    days: number;
    minutes: number;
    seconds: number;
  };
  buttonText: string;
  imageSrc: string;
}

export interface ProductCards {
  imageSrc: string;
  title: string;
  price: number;
  rate: number;
  initialPrice: number;
}

export interface ItemCards {
  imageSrc: string;
  title: string;
  price: number;
  rate: number;
  initialPrice?: number;
}

export interface MainProductItem {
  imageSrc: string;
  title: string;
  price: number;
  initialPrice?: number;
  rate: number;
}

export interface ServiceType {
  imageSrc: string;
  title: string;
  description: string;
}

export interface NewProductItem {
  imageSrc: string;
  title: string;
  price: number;
  rate: number;
}
