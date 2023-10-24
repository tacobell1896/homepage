import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { link } from '../link';
import { LINKS } from '../link-list';
import { CATEGORIES } from '../category-list';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    // TODO: separate link array from categories
  categories: Category[] = CATEGORIES;
  links: link[] = LINKS;
  getCategoryLinks(categoryId: number): link[] {
    if (this.categories) {
        const foundCategory =  this.categories?.find(category => category.id === categoryId);
        return foundCategory ? foundCategory.links : [];
    }
    return [];
  }
  addLink(name: string, url: string, categoryId: number) {
    console.log("Link added!");
    this.links.push({id: 0, name: '', url: '', categoryId: 0})
    console.log(this.links);
  }
  addCategory() {
    console.log("Category added!");
    this.categories.push({id: 0, name: 'New Category', links: []});
    console.log(this.categories);
  }
  constructor() { }
  ngOnInit(): void {

    
  }

}
