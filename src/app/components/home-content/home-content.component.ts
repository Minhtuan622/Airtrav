import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.sass']
})
export class HomeContentComponent implements OnInit {

  public partner = [
    'assets/partner/amadeus.png',
    'assets/partner/booking.png',
    'assets/partner/cheapflight.png',
    'assets/partner/momondo.png',
    'assets/partner/trainline.png',
    'assets/partner/trivago.png'
  ]

  public trip_booking = [
    {
      img: 'assets/Trip%20Advisor.png',
      title: 'Trip Advisor',
      content: 'Cheap Flights Amazing Experiences'
    },
    {
      img: 'assets/Arbn.png',
      title: 'Arbn',
      content: 'Choose From a Wide Range of Properties Which Booking.'
    },
    {
      img: 'assets/Turkish%20Kargo.png',
      title: 'Turkish Kargo',
      content: 'Best Flights Amazing Services'
    },
    {
      img: 'assets/Itata.png',
      title: 'Itata',
      content: 'Cheap Flights Amazing Experiences'
    },
  ]

  public works = [
    {
      img: 'assets/user.png',
      title: 'Account',
      sub: 'All the necessary information to create your account are below this.'
    },
    {
      img: 'assets/map.png',
      title: 'Select Destination',
      sub: 'At first choose the place you wanted to go'
    },
    {
      img: 'assets/book.png',
      title: 'Book a Trip',
      sub: 'book your tip form our exclusive offers'
    },
    {
      img: 'assets/plane.png',
      title: 'Take your flight',
      sub: 'Take your flight on selected date and joy'
    }
  ]

  public services = [
    {
      img: 'assets/city.png',
      title: '100,000',
      sub: 'Cities all over the world'
    },
    {
      img: 'assets/gift.png',
      title: '100',
      sub: 'Gift card over the world'
    },
    {
      img: 'assets/guest.png',
      title: '1000',
      sub: 'Guest referrals over'
    },
    {
      img: 'assets/star.png',
      title: '5 Star',
      sub: 'Reviews Customar '
    },
  ]

  public feature = [
    {
      img: 'assets/feature1.png',
      title: 'Share Your Travel Plan',
      text: 'Ticket is an ultra-convenient way to buy your \n' +
        'train or bus ticket online in seconds.'
    },
    {
      img: 'assets/feature2.png',
      title: 'Get Monthly Tour',
      text: 'Our Get Monthly Tours marketing package will help\n' +
        'get more clients in your photography business. '
    },
    {
      img: 'assets/feature3.png',
      title: 'Receive Ticket',
      text: 'The Receive plan Ticket will allow you to travel freely.\n' +
        'You will be able to get in any location.'
    },
    {
      img: 'assets/feature4.png',
      title: 'Flight Booking',
      text: 'Flight Booking is an ultra-convenient way to buy your \n' +
        'train or bus ticket online in seconds.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
