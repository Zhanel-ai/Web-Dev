import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {

  products: Product[] = [
  {
    id: 1,
    name: 'Пароочиститель Atreon DFHS-01',
    description: 'Компактный пароочиститель для эффективной уборки дома. Удаляет загрязнения и дезинфицирует поверхности.',
    price: 24900,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p30/p6e/97012555.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/59895566.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/'
  },
  {
    id: 2,
    name: 'Аэрогриль EL-8L 8 л черный',
    description: 'Удобный электрочайник объемом 8 литров. Подходит для дома и офиса.',
    price: 19450,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p09/85926698.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p9f/p09/85926698.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p36/p06/85926699.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pa4/pf2/85926700.jpeg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/el-8l-8-l-chernyi-116751664/'
  },
  {
    id: 3,
    name: 'Блендер MONTERO PRO K9',
    description: 'Мощный стационарный блендер для смузи и коктейлей. Стильный серебристый дизайн.',
    price: 27390,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p3e/63083117.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pb6/p3e/63083117.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p20/p42/63083118.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p89/p45/63083119.jpeg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/blender-statsionarnyi-montero-pro-k9-serebristyi-133292706/'
  },
  {
    id: 4,
    name: 'Отпариватель AVENTIX PAR200',
    description: 'Компактный ручной отпариватель для одежды. Быстро разглаживает складки.',
    price: 13499,
    rating: 4.3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p87/p48/61023361.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p5a/p4f/61023363.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p2e/p56/61023365.jpeg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/otparivatel-aventix-par200-fioletovyi-144751155/'
  },
  {
    id: 5,
    name: 'Отпариватель AEROLITH Steam Garment Premium',
    description: 'Профессиональный отпариватель для одежды. Подходит для ежедневного использования.',
    price: 45990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p88/p84/84404891.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p88/p84/84404891.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pdc/pe9/81085669.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p64/pec/81085671.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/otparivatel-aerolith-steam-garment-premium-belyi-bronzovyi-150458532/'
  },
  {
    id: 6,
    name: 'Увлажнитель воздуха MiBaby Mi001',
    description: 'Современный увлажнитель воздуха для поддержания комфортного микроклимата.',
    price: 4990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p2a/p23/8582069.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p54/p2b/8582071.jpeg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/'
  },
  {
    id: 7,
    name: 'Пароочиститель Ainomi CleanMop 4 в 1',
    description: 'Многофункциональный пароочиститель 4 в 1. Эффективная уборка и дезинфекция.',
    price: 44990,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p66/pd1/87795374.png?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p66/pd1/87795374.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p10/p43/74015501.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pbc/p42/74015504.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/paroochistitel-ainomi-premium-cleanmop-4-v-1-belyi-146479277/'
  },
  {
    id: 8,
    name: 'Увлажнитель воздуха RMXX SC-2407',
    description: 'Стильный и тихий увлажнитель воздуха. Идеален для спальни и детской комнаты.',
    price: 24900,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd5/pc7/84095769.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pd5/pc7/84095769.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pec/p81/91184627.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pf9/p01/58583497.png?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-rmxx-sc-2407-belyi-137291298/'
  },
  {
    id: 9,
    name: 'Морозильник Leadbros BC/BD-217AT',
    description: 'Компактный морозильник объемом 217 литров. Подходит для кухни и офиса.',
    price: 89990,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h20/64348814868510.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h20/64348814868510.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h18/hbf/64348819161118.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64348823453726.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/leadbros-bc-bd-217at-217-l-belyi-105632244/'
  },
  {
    id: 10,
    name: 'Отпариватель AEROLITH STEAM-01',
    description: 'Современный ручной отпариватель с высокой мощностью подачи пара.',
    price: 13900,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/p53/97764459.jpeg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p78/p53/97764459.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p6e/p76/71880757.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p2f/p79/71880761.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/otparivatel-aerolith-steam-01-seryi-chernyi-rozovyi-147800146/'
  }
];
  share(product: Product) {
    const message = `Check out this product: ${product.link}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');

}
  getStars(rating: number): number[] {
  return Array(Math.round(rating)).fill(0);
}

getEmptyStars(rating: number): number[] {
  return Array(5 - Math.round(rating)).fill(0);
}

  currentImageIndex: { [key: number]: number } = {};

setImage(productId: number, index: number) {
  this.currentImageIndex[productId] = index;
}

nextImage(product: Product) {
  const current = this.currentImageIndex[product.id] ?? 0;
  this.currentImageIndex[product.id] =
    (current + 1) % product.images.length;
}

prevImage(product: Product) {
  const current = this.currentImageIndex[product.id] ?? 0;
  this.currentImageIndex[product.id] =
    (current - 1 + product.images.length) % product.images.length;
}
}