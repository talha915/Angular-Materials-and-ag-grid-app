import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.scss']
})
export class HomecomponentComponent implements OnInit {
  Data = [
    {
      id: 1,
      name: 'Card 1',
      details: 'Cards 1 Explanation',
    },
    {
      id: 2,
      name: 'Card 2',
      details: 'Cards 2 Explanation',
    },
    {
      id: 3,
      name: 'Card 3',
      details: 'Cards 3 Explanation',
    },
    {
      id: 4,
      name: 'Card 4',
      details: 'Cards 4 Explanation',
    },
    {
      id: 5,
      name: 'Card 5',
      details: 'Cards 5 Explanation',
    },
    {
      id: 6,
      name: 'Card 6',
      details: 'Cards 6 Explanation',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
