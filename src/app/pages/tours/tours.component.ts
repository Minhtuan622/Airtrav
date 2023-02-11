import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.sass']
})
export class ToursComponent implements OnInit {
  public top_tours = [
    {
      img: 'assets/iso-topon-NAruOBAvyN0-unsplash%201.png',
      name: 'Thailands Ayutthaya Temples Cruise from Bangkok',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/sua-truong-PHMabtedGwQ-unsplash.png',
      name: 'FLoating Markets Day Trip from Bangkok',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/martyna-bober-yd1_Tupnls4-unsplash.png',
      name: 'Bangkok Dinner Cruise on the Chao Phraya River',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    }
  ]
  public tours = [
    {
      img: 'assets/brendan-greenway-SouFaFk9-KQ-unsplash%202.png',
      name: 'Bridge on the River Kwai and Thailands Burma Railway Tour',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/blue-villa-beautiful-sea-hotel.png',
      name: 'Bangkok by Night Temples Markets and Food by Tuk-Tuk',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/blue-morning-natural-mountains-bamboo.png',
      name: 'Bangkok Dinner Cruise on the Chao Phraya River',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    }
  ]
  public luxury = [
    {
      img: 'assets/brendan-greenway-SouFaFk9-KQ-unsplash%202.png',
      name: 'Bridge on the River Kwai and Thailands Burma Railway Tour',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/blue-villa-beautiful-sea-hotel.png',
      name: 'Bangkok by Night Temples Markets and Food by Tuk-Tuk',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/blue-morning-natural-mountains-bamboo.png',
      name: 'Bangkok Dinner Cruise on the Chao Phraya River',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    }
  ]
  public cultural = [
    {
      img: 'assets/brendan-greenway-SouFaFk9-KQ-unsplash%202.png',
      name: 'Bridge on the River Kwai and Thailands Burma Railway Tour',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/blue-villa-beautiful-sea-hotel.png',
      name: 'Bangkok by Night Temples Markets and Food by Tuk-Tuk',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/blue-morning-natural-mountains-bamboo.png',
      name: 'Bangkok Dinner Cruise on the Chao Phraya River',
      price: 40,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
