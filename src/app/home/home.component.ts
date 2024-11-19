import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // List of food trucks
  foodTrucks = [
    {
      name: 'Taco Paradise',
      cuisine: 'Mexican',
      logo: 'assets/logos/taco-paradise.png',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Burger Haven',
      cuisine: 'American',
      logo: 'assets/logos/burger-haven.png',
      location: 'Austin, TX'
    },
    {
      name: 'Pizza Mania',
      cuisine: 'Italian',
      logo: 'assets/logos/pizza-mania.png',
      location: 'New York, NY'
    },
    {
      name: 'Sushi Express',
      cuisine: 'Japanese',
      logo: 'assets/logos/sushi-express.png',
      location: 'San Francisco, CA'
    },
    {
      name: 'Curry Corner',
      cuisine: 'Indian',
      logo: 'assets/logos/curry-corner.png',
      location: 'Seattle, WA'
    }
  ];
}
