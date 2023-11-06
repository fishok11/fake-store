// import { Cart, ProductsInCart } from "./store/types";

export const DEFAULT_URL = 'http://localhost:3002/'

export const cap = (str: string) => {
  if (str === '') return str;

  str = str.replace(/([A-Z])/g, ' $1');

  return str
    .split(' ')
    .map(word => 
      word.charAt(0).toUpperCase() 
      + word.slice(1).toLowerCase()
    )
    .join(' ')
}

export const cookiesLifetime = new Date('3000-12-17T03:24:00');


// export const extractProducts = (orderList: Cart) => {
//   const products: ProductsInCart[] = [];
//   orderList.forEach((order) => {
//     extractedProducts.push(...order.products);
//   });
//   return extractedProducts;
// };