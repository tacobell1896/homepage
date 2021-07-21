import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { LINKS } from '../link-list';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  links = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
