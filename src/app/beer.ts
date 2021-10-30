export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  food_pairing: FoodPairing[];
  abv: number;
  ph: number;
}

export interface FoodPairing{
    name: string;
  }
