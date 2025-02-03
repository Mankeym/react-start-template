import { IGoodsItem } from '../components/interfaces';

const image1 = 'https://cdn.4stand.com/large2x/3b/c8/3bc846ca5ec9906d4f7b2aec91c8d7d0c3931a1a.jpg';

export const goods: IGoodsItem[] = [
  {
    id: 1,
    isInStock: true,
    title: 'Classic Monochrome Tees',
    details: [
      "Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection.",
      "The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.",
    ],
    price: 75,
    imageListing: image1,
    imageFull: [image1, image1],
  },
];
