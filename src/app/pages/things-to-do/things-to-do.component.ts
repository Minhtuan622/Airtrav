import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.sass']
})
export class ThingsToDoComponent implements OnInit {
  public option: String[] = ['Show side trips', 'Show items in my trips']
  public activity_type: String[] = ['Hidden Gems', 'Shopping', 'Historic Sites', 'Nightlife', 'Tours', 'Outdoors', 'U Museums' ,'Parks']
  public card = [
    {img: 'assets/CRU%20Champagne%20Bar.png',
    name: 'CRU Champagne Bar',
    star: 4.8,
    reviews: 122,
    info: 'Unique 360 panoramic views of the amazing\n' +
      'Bangkok skyline, inspired from the best \n' +
      'Champagne listings worldwide.',
    price: 83
    },
    {
      img: 'assets/Tour%20with%20Tong.png',
      name: 'Tour with Tong',
      star: 4.8,
      reviews: 122,
      info: 'Unique 360 panoramic views of the amazing\n' +
        'Bangkok skyline, inspired from the best \n' +
        'Champagne listings worldwide.',
      price: 83
    },
    {
      img: 'assets/Wat%20Saket,%20Bangkok.png',
      name: 'Wat Saket, Bangkok',
      star: 4.8,
      reviews: 122,
      info: 'Unique 360 panoramic views of the amazing\n' +
        'Bangkok skyline, inspired from the best \n' +
        'Champagne listings worldwide.',
      price: 83
    },
    {
      img: 'assets/Safari%20World.png',
      name: 'Safari World',
      star: 4.8,
      reviews: 122,
      info: 'Unique 360 panoramic views of the amazing\n' +
        'Bangkok skyline, inspired from the best \n' +
        'Champagne listings worldwide.',
      price: 83
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
