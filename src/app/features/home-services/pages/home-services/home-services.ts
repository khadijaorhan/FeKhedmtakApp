import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HomeService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home-services',
  imports: [RouterLink],
  templateUrl: './home-services.html',
  styleUrl: './home-services.css'
})
export class HomeServices {

  services: HomeService[] = [

    {
      id: 'cleaning',
      title: 'تنظيف المنزل',
      description: 'خدمة تنظيف شاملة للمنزل وترتيب الغرف والمطابخ والحمامات.',
      icon: 'bi-stars'
    },

    {
      id: 'carpet',
      title: 'غسيل السجاد',
      description: 'اختار مقاس السجادة والكمية المطلوبة واحجز موعد الاستلام.',
      icon: 'bi-grid-3x3'
    },

    {
      id: 'curtains',
      title: 'غسيل الستائر',
      description: 'غسيل وتنظيف الستائر بمقاسات وأنواع مختلفة.',
      icon: 'bi-window'
    },

    {
      id: 'ironing',
      title: 'كوي الملابس',
      description: 'كوي وتجهيز الملابس المختلفة بشكل مرتب وسريع.',
      icon: 'bi-person-standing'
    },

    {
      id: 'cooking',
      title: 'طبخ منزلي',
      description: 'اطلب وجبات منزلية واختر عدد الوجبات والموعد المناسب.',
      icon: 'bi-egg-fried'
    },

    {
      id: 'maintenance',
      title: 'صيانة منزلية',
      description: 'اطلب فني متخصص لأعمال الصيانة والإصلاحات المنزلية.',
      icon: 'bi-tools'
    },

    {
      id: 'electricity',
      title: 'كهرباء',
      description: 'خدمات كهرباء وتركيب وإصلاح الأعطال المنزلية.',
      icon: 'bi-lightbulb'
    },

    {
      id: 'plumbing',
      title: 'سباكة',
      description: 'حل مشاكل السباكة وتسريب المياه وأعمال الإصلاح.',
      icon: 'bi-droplet'
    }

  ];

}