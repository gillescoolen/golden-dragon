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
  comment?: string;
};

export type Order = {
  id: number;
  date: Date;
  comment: string;
  dishes: Dish[];
};

export type Allergy = {
  description: string;
};

export type AuthenticationPayload = {
  id: number;
  password: string;
};

export type Category = {
  name: string;
  dishes: Dish[];
};

export type News = {
  id: number;
  content: string;
};

export type User = {
  id: number;
  role: Role;
};

export enum Role {
  Admin = 'admin',
  Worker = 'kassamedewerker',
  Waitress = 'serveerster',
  Customer = 'klant'
}

export type OrderResponse = {
  id: number;
  date: Date;
  comment: string;
  dishes: DishResponse[];
};

export type DishResponse = {
  id: number;
  name: string;
  description: null | string;
  price: number;
  prefix: null | string;
  index: number;
  suffix: null | string;
  spicyness: number;
  category: string;
  pivot: OrderDishPivot;
};

export type OrderDishPivot = {
  order_id: number;
  dish_id: number;
  amount: number;
  comment: string;
};
