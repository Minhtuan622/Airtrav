import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public navigate= [
    {
      link: 'thingstodo',
      text: "Things to do"
    },
    {
      link: 'guide',
      text: "Travel Guide"
    },
    {
      link: 'tours',
      text: 'Tours'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
