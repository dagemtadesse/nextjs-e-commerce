import { Item } from "./item";

export interface Collection {
  id: number;
  type: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod: null;
  installmentPrice: null;
  installmentPeriod: null;
  rating: 5;
  startDate: null;
  endDate: null;
  viewType: null;
  createdAt: string;
  items: Item[];
  media: File[];
  thumbnail: File;
  taggings: string[];
  singleCollections: [];
}
