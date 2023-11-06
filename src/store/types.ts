export type Product = {
  id: number;
  title: string;
  price: number;
  category: string; 
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
};

export type Products = Product[];

//=======================================================================

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
}

export type UserSingUp = {
  email: string;
  username: string;
  password: string;
}

export type UserLogIn = {
  username: string;
  password: string;
}

//=======================================================================

export type ProductsInCart = {
  productId: number;
  quantity: number;
}

export type CartItemToAdded = {
  userId: number;
  date: Date;
  products: ProductsInCart[];
};

export type CartItem = {
  id: number;
  userId: number;
  date: Date;
  products: ProductsInCart[];
}; 

export type Cart = CartItem[];

//=======================================================================