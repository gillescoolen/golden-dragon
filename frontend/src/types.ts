export type Dish = {
  id: number;
  name: string;
  description: null | string;
  price: number;
  prefix: null | string;
  index: number;
  suffix: null | string;
  spicyness: number;
  category: string;
  allergies: Allergy[];
  amount: number;
};

export type Allergy = {
  description: string;
};

export type AuthenticationPayload = {
  id: number;
  password: string;
};
