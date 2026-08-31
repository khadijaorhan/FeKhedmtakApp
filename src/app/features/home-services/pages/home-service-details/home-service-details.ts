import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface ServiceDetails {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'products' | 'form';
  products?: Product[];
}

@Component({
  selector: 'app-home-service-details',
  imports: [FormsModule, RouterLink],
  templateUrl: './home-service-details.html',
  styleUrl: './home-service-details.css'
})
export class HomeServiceDetails {

  serviceId = '';

  service: ServiceDetails | undefined;

  customerName = '';
  phone = '';
  address = '';
  appointmentDate = '';
  appointmentTime = '';
  notes = '';

  services: ServiceDetails[] = [

    {
      id: 'cleaning',
      title: 'تنظيف المنزل',
      description: 'خدمة تنظيف شاملة للمنزل.',
      icon: 'bi-stars',
      type: 'form'
    },

    {
      id: 'carpet',
      title: 'غسيل السجاد',
      description: 'اختار مقاسات السجاد والكمية المطلوبة.',
      icon: 'bi-grid-3x3',
      type: 'products',
      products: [
        {
          id: 1,
          name: 'سجادة صغيرة',
          description: 'مناسبة للغرف الصغيرة.',
          price: 80,
          image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 2,
          name: 'سجادة متوسطة',
          description: 'مناسبة لغرف المعيشة.',
          price: 120,
          image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 3,
          name: 'سجادة كبيرة',
          description: 'مناسبة للمساحات الكبيرة.',
          price: 180,
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        }
      ]
    },

    {
      id: 'curtains',
      title: 'غسيل الستائر',
      description: 'اختار نوع وحجم الستارة.',
      icon: 'bi-window',
      type: 'products',
      products: [
        {
          id: 4,
          name: 'ستارة صغيرة',
          description: 'ستارة نافذة صغيرة.',
          price: 60,
          image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 5,
          name: 'ستارة متوسطة',
          description: 'ستارة غرفة أو صالة.',
          price: 90,
          image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 6,
          name: 'ستارة كبيرة',
          description: 'ستارة كبيرة للمساحات الواسعة.',
          price: 130,
          image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        }
      ]
    },

    {
      id: 'ironing',
      title: 'كوي الملابس',
      description: 'اختار أنواع الملابس والكمية.',
      icon: 'bi-person-standing',
      type: 'products',
      products: [
        {
          id: 7,
          name: 'تيشيرت',
          description: 'كوي وتجهيز تيشيرت.',
          price: 10,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 8,
          name: 'قميص',
          description: 'كوي وتجهيز قميص.',
          price: 15,
          image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 9,
          name: 'بنطلون قماش',
          description: 'كوي بنطلون قماش.',
          price: 15,
          image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 10,
          name: 'بنطلون جينز',
          description: 'كوي بنطلون جينز.',
          price: 18,
          image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 11,
          name: 'جلابية',
          description: 'كوي وتجهيز جلابية.',
          price: 25,
          image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        }
      ]
    },

    {
      id: 'cooking',
      title: 'طبخ منزلي',
      description: 'اطلب وجبات منزلية حسب العدد.',
      icon: 'bi-egg-fried',
      type: 'products',
      products: [
        {
          id: 12,
          name: 'وجبة فردية',
          description: 'وجبة منزلية لشخص واحد.',
          price: 100,
          image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        },
        {
          id: 13,
          name: 'وجبة عائلية',
          description: 'وجبة مناسبة للعائلة.',
          price: 250,
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
          quantity: 0
        }
      ]
    },

    {
      id: 'maintenance',
      title: 'صيانة منزلية',
      description: 'اطلب فني متخصص لأعمال الصيانة.',
      icon: 'bi-tools',
      type: 'form'
    },

    {
      id: 'electricity',
      title: 'كهرباء',
      description: 'خدمات تركيب وإصلاح الأعطال الكهربائية.',
      icon: 'bi-lightbulb',
      type: 'form'
    },

    {
      id: 'plumbing',
      title: 'سباكة',
      description: 'إصلاح تسريب المياه ومشاكل السباكة.',
      icon: 'bi-droplet',
      type: 'form'
    }

  ];


  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {

      this.serviceId = params.get('serviceId') || '';

      this.service = this.services.find(
        service => service.id === this.serviceId
      );

    });

  }


  increase(product: Product): void {

    product.quantity++;

  }


  decrease(product: Product): void {

    if (product.quantity > 0) {
      product.quantity--;
    }

  }


  get selectedProducts(): Product[] {

    return this.service?.products?.filter(
      product => product.quantity > 0
    ) || [];

  }


  get totalItems(): number {

    return this.selectedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );

  }


  get totalPrice(): number {

    return this.selectedProducts.reduce(
      (total, product) =>
        total + product.price * product.quantity,
      0
    );

  }


  confirmOrder(): void {

    if (!this.customerName.trim()) {
      alert('من فضلك اكتب الاسم');
      return;
    }


    if (!this.phone.trim()) {
      alert('من فضلك اكتب رقم الهاتف');
      return;
    }


    if (!this.address.trim()) {
      alert('من فضلك اكتب العنوان');
      return;
    }


    if (!this.appointmentDate || !this.appointmentTime) {
      alert('من فضلك اختر موعد الخدمة');
      return;
    }


    if (
      this.service?.type === 'products' &&
      this.selectedProducts.length === 0
    ) {
      alert('من فضلك اختر المنتجات المطلوبة');
      return;
    }


    const order = {

      service: this.service?.title,

      products: this.selectedProducts,

      totalItems: this.totalItems,

      totalPrice: this.totalPrice,

      customerName: this.customerName,

      phone: this.phone,

      address: this.address,

      appointmentDate: this.appointmentDate,

      appointmentTime: this.appointmentTime,

      notes: this.notes

    };


    console.log(order);

    alert('تم تسجيل طلبك بنجاح');

  }

}