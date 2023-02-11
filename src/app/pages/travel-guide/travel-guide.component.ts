import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-guide',
  templateUrl: './travel-guide.component.html',
  styleUrls: ['./travel-guide.component.sass']
})
export class TravelGuideComponent implements OnInit {
  public tours = [
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
      price: 70,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    },
    {
      img: 'assets/martyna-bober-yd1_Tupnls4-unsplash.png',
      name: 'Bangkok Dinner Cruise on the Chao Phraya River',
      price: 60,
      star: 4.8,
      reviews: 12,
      duration: 9,
      cost: 61
    }
  ]

  public popular = [
    {
      img: 'assets/brendan-greenway-SouFaFk9-KQ-unsplash%202.png',
      name: 'The Grand Palace'
    },
    {
      img: 'assets/blue-villa-beautiful-sea-hotel.png',
      name: 'Chatuchak Weekend'
    },
    {
      img: 'assets/blue-morning-natural-mountains-bamboo.png',
      name: 'Wat Pho'
    },
    {
      img: 'assets/alejandro-cartagena-B64B6-kAWlw-unsplash%201.png',
      name: 'Temple Of Dawn'
    },
  ]

  public games = [
    {
      img: 'assets/blue-morning-natural-mountains-bamboo.png',
      name: 'Bangkok Trip',
      time: '27 Sep, 2020'
    },
    {
      img: 'assets/alejandro-cartagena-B64B6-kAWlw-unsplash%201.png',
      name: 'Bangkok Trip',
      time: '27 Sep, 2020'
    },
    {
      img: 'assets/brendan-greenway-SouFaFk9-KQ-unsplash%202.png',
      name: 'Bangkok Trip',
      time: '27 Sep, 2020'
    },
    {
      img: 'assets/Tour%20with%20Tong.png',
      name: 'Bangkok Trip',
      time: '27 Sep, 2020'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
