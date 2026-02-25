import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }

  share() {
    const message = `Check out this product: ${this.product.link}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  }
}