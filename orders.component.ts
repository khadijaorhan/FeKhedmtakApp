import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {
  items: any[] = [];
  private cartSub!: Subscription;

  customerData = {
    name: '',
    phone: '',
    country: '',
    address: '',
    paymentMethod: 'cash'
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.items$.subscribe((cartItems: any[]) => {
      this.items = cartItems;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }

  increaseQty(index: number): void {
    const item = this.items[index];
    if (this.cartService.increaseQuantity) {
      this.cartService.increaseQuantity(item.id);
    } else {
      item.quantity++;
    }
  }

  decreaseQty(index: number): void {
    const item = this.items[index];
    if (this.cartService.decreaseQuantity) {
      this.cartService.decreaseQuantity(item.id);
    } else if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(index);
    }
  }

  removeItem(index: number): void {
    const item = this.items[index];
    // تجربة اسم الدالة الموجود بالسيرفيس
    if ((this.cartService as any).removeItem) {
      (this.cartService as any).removeItem(item.id);
    } else if ((this.cartService as any).removeFromCart) {
      (this.cartService as any).removeFromCart(item.id);
    } else {
      this.items.splice(index, 1);
    }
  }

  calculateSubtotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  submitOrder(): void {
    if (this.items.length === 0) {
      alert('السلة فارغة!');
      return;
    }

    if (!this.customerData.name || !this.customerData.phone || !this.customerData.address) {
      alert('يرجى ملء جميع البيانات المطلوبة للتوصيل.');
      return;
    }

    alert('تم إرسال طلبك بنجاح!');
    if (this.cartService.clearCart) {
      this.cartService.clearCart();
    }
    this.router.navigate(['/']);
  }
}
