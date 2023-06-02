import { Component, OnInit } from '@angular/core';
import { Link, Category } from '../category';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  categories: Category[] = [
    {
        id: 1, 
        name: 'Bored', 
        links: [   
            { id: 1, name: 'Reddit', url: 'https://reddit.com', categoryId: 1},
            { id: 2, name: '4chan', url: 'https://boards.4chan.org', categoryId: 1},
            { id: 3, name: 'Twitter', url: 'https://twitter.com', categoryId: 1},
            { id: 4, name: 'MonkeyType', url: 'https://monkeytype.com', categoryId: 1},
            { id: 5, name: 'MangaDex', url: 'https://mangadex.org', categoryId: 1}
        ]
    },
    {
        id: 2, 
        name: 'Productivity', 
        links: [
            { id: 6, name: 'Github', url: 'https://github.com', categoryId: 2},
            { id: 7, name: 'Unifi Controller', url: 'https://unifi.ubnt.com',    categoryId: 2},
            { id: 8, name: 'AWS', url: 'https://aws.amazon.com',      categoryId: 2},
            { id: 9, name: 'Free Code Camp', url: 'https://freecodecamp.org' ,categoryId: 2},
            { id: 10, name: 'Hacker 101 CTF', url: 'https://www.hacker101.com' ,categoryId: 2},
            { id: 11, name: 'HackerOne', url: 'https://www.hackerone.com' ,categoryId: 2},        
        ]
        
    },
    {
        id: 3, 
        name: 'Finance', 
        links: [
            { id: 12, name: 'Robinhood', url: 'https://robinhood.com' ,categoryId: 3},
            { id: 13, name: 'Coinbase', url: 'https://coinbase.com' ,categoryId: 3},
            { id: 14, name: 'Binance', url: 'https://binance.us' ,categoryId: 3},
            { id: 15, name: 'TD Ameritrade', url: 'https://tdameritrade.com' ,categoryId: 3},
            { id: 16, name: 'E-Trade', url: 'https://us.etrade.com' ,categoryId: 3},        
        ]
    },
    {
        id: 4, 
        name: 'News', 
        links: [
            { id: 17, name: 'Hacker News', url: 'https://news.ycombinator.com' ,categoryId: 4},
            { id: 18, name: 'Ars Technica', url: 'https://arstechnica.com' ,     categoryId: 4},
            { id: 19, name: 'The Verge', url: 'https://theverge.com' ,     categoryId: 4},
            { id: 20, name: 'Polygon', url: 'https://polygon.com' ,     categoryId: 4},
            { id: 21, name: 'Bleeping Computer', url: 'https://bleepingcomputer.com' ,     categoryId: 4},
            { id: 22, name: 'Google News', url: 'https://news.google.com' ,     categoryId: 4},
        
        ]
    },
    {
        id: 5, 
        name: 'Reference', 
        links: [
            { id: 23, name: 'Arch Wiki', url: 'https://wiki.archlinux.org' ,     categoryId: 5},
            { id: 24, name: 'Wikipedia', url: 'https://www.wikipedia.org' ,     categoryId: 5},
            { id: 25, name: 'Exploit Database', url: 'https://exploit-db.com' ,     categoryId: 5},
            { id: 26, name: 'StackOverflow', url: 'https://stackoverflow.com' ,     categoryId: 5},
            { id: 27, name: 'Mozilla Developer Network', url: 'https://developer.mozilla.org' ,     categoryId: 5},
        
        ]
    },
    {
        id: 6, 
        name: 'Video', 
        links: [
            { id: 28, name: 'Youtube', url: 'https://youtube.com' ,     categoryId: 6},
            { id: 29, name: 'Twitch', url: 'https://twitch.tv' ,     categoryId: 6},
            { id: 30, name: 'Crunchyroll', url: 'https://crunchyroll.com' ,     categoryId: 6},
            { id: 31, name: 'Netflix', url: 'https://netflix.com' ,     categoryId: 6},
            { id: 32, name: 'Hulu', url: 'https://hulu.com' ,     categoryId: 6},
            { id: 33, name: 'Prime Video', url: 'https://www.amazon.com/Amazon-Video/b/?&node=2858778011' ,     categoryId: 6},
        
        ]
    },
  ];
  getCategoryLinks(categoryId: number): Link[] {
    if (this.categories) {
        const foundCategory =  this.categories?.find(category => category.id === categoryId);
        return foundCategory ? foundCategory.links : [];
    }
    return [];
  }
  constructor() { }
  ngOnInit(): void {

    
  }

}
