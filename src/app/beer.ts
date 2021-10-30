export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  food_pairing: string[];
  abv: number;
  ph: number;
}

export interface FoodPairing {
  name: string;
}

export interface Sort {
  id: number,
  name: string,
  image_url: string;
}