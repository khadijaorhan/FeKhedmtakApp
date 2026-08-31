import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TawseelaType = 'car' | 'microbus' | 'package';

@Component({
  selector: 'app-tawseela',
  imports: [FormsModule],
  templateUrl: './tawseela.html',
  styleUrl: './tawseela.css'
})
export class Tawseela {

  selectedType: TawseelaType | null = null;

  fromLocation: string = '';
  toLocation: string = '';

  bookingDate: string = '';
  bookingTime: string = '';

  passengers: number = 1;
  bags: number = 0;

  packageDescription: string = '';
  packageWeight: number = 1;

  notes: string = '';

  estimatedDistance: number = 10;
  estimatedPrice: number = 0;

  services = [
    {
      id: 'car' as TawseelaType,
      icon: 'bi-car-front-fill',
      title: 'مشوار ملاكي',
      description: 'احجز عربية ملاكي لمشوارك داخل أو خارج المدينة.',
      price: 12,
      unit: 'كم'
    },
    {
      id: 'microbus' as TawseelaType,
      icon: 'bi-bus-front-fill',
      title: 'رحلة ميكروباص',
      description: 'احجز رحلة ميكروباص للعائلات والمجموعات.',
      price: 8,
      unit: 'فرد / كم'
    },
    {
      id: 'package' as TawseelaType,
      icon: 'bi-box-seam-fill',
      title: 'توصيل طرد',
      description: 'ابعت طرد أو اطلب استلامه وتوصيله للمكان المطلوب.',
      price: 35,
      unit: 'طلب'
    }
  ];

  selectService(type: TawseelaType): void {
    this.selectedType = type;
    this.calculatePrice();
  }

  get selectedService() {
    return this.services.find(
      service => service.id === this.selectedType
    );
  }

  increasePassengers(): void {
    if (this.passengers < 20) {
      this.passengers++;
      this.calculatePrice();
    }
  }

  decreasePassengers(): void {
    if (this.passengers > 1) {
      this.passengers--;
      this.calculatePrice();
    }
  }

  increaseBags(): void {
    if (this.bags < 20) {
      this.bags++;
      this.calculatePrice();
    }
  }

  decreaseBags(): void {
    if (this.bags > 0) {
      this.bags--;
      this.calculatePrice();
    }
  }

  increaseWeight(): void {
    if (this.packageWeight < 100) {
      this.packageWeight++;
      this.calculatePrice();
    }
  }

  decreaseWeight(): void {
    if (this.packageWeight > 1) {
      this.packageWeight--;
      this.calculatePrice();
    }
  }

  calculatePrice(): void {

    if (!this.selectedType) {
      this.estimatedPrice = 0;
      return;
    }

    if (this.selectedType === 'car') {
      const basePrice = 40;
      const distancePrice = this.estimatedDistance * 12;
      const bagsPrice = this.bags * 5;

      this.estimatedPrice = basePrice + distancePrice + bagsPrice;
      return;
    }

    if (this.selectedType === 'microbus') {
      const basePrice = 80;
      const distancePrice =
        this.estimatedDistance * 8 * this.passengers;

      const bagsPrice = this.bags * 5;

      this.estimatedPrice =
        basePrice + distancePrice + bagsPrice;

      return;
    }

    if (this.selectedType === 'package') {
      const basePrice = 35;
      const weightPrice =
        Math.max(0, this.packageWeight - 1) * 10;

      this.estimatedPrice =
        basePrice + weightPrice;
    }
  }

  confirmOrder(): void {

    if (!this.selectedType) {
      alert('من فضلك اختار نوع التوصيلة');
      return;
    }

    if (!this.fromLocation || !this.toLocation) {
      alert('من فضلك أدخل مكان الاستلام ومكان الوصول');
      return;
    }

    if (!this.bookingDate || !this.bookingTime) {
      alert('من فضلك حدد التاريخ والساعة');
      return;
    }

    if (
      this.selectedType === 'package' &&
      !this.packageDescription
    ) {
      alert('من فضلك اكتب وصف الطرد');
      return;
    }

    const order = {
      type: this.selectedService?.title,
      from: this.fromLocation,
      to: this.toLocation,
      date: this.bookingDate,
      time: this.bookingTime,
      passengers:
        this.selectedType === 'package'
          ? null
          : this.passengers,
      bags: this.bags,
      packageDescription:
        this.selectedType === 'package'
          ? this.packageDescription
          : null,
      packageWeight:
        this.selectedType === 'package'
          ? this.packageWeight
          : null,
      notes: this.notes,
      estimatedPrice: this.estimatedPrice
    };

    console.log('Tawseela Order:', order);

    alert(
      `تم تسجيل طلب التوصيلة بنجاح\nالسعر التقديري: ${this.estimatedPrice} جنيه`
    );
  }
}