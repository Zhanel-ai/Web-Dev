import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {

  searchQuery: string = '';
  filteredProducts: Product[] = [];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'iPhone with A15 chip and dual-camera system.',
      price: 429990,
      rating: 4.8,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298404/'
    },
    {
      id: 2,
      name: 'iPhone 12',
      description: 'Powerful performance with A14 Bionic chip.',
      price: 339990,
      rating: 4.5,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020',
      link: 'https://kaspi.kz/shop/p/apple-iphone-12-256gb-sinii-100657053/?c=750000000'
    },
    {
      id: 3,
      name: 'iPhone 11 Pro',
      description: 'Triple-camera system for professional photography.',
      price: 579990,
      rating: 4.7,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019',
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-pro-256gb-100653281/'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 FE',
      description: 'Flagship Samsung smartphone with amazing display.',
      price: 550000,
      rating: 4.6,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/kz_ru/feature/165633290/kz_ru-feature-blue-543651640?$900_N_JPG$',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-256gb-110222222/'
    },
    {
      id: 5,
      name: 'Samsung Galaxy Z Flip7',
      description: 'Innovative foldable smartphone with stylish design.',
      price: 699900,
      rating: 4.9,
      image: 'https://images.samsung.com/kz_ru/smartphones/galaxy-z-flip7/buy/whats_in_the_box/in_the_box_blueShadow_PC.jpg?imbypass=true',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip-7-110333333/'
    }
  ];

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

  viewProduct(link: string): void {
    window.open(link, '_blank');
  }

  shareProduct(product: Product): void {
    const message = `Check out this product: ${product.name} - ${product.link}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }
}