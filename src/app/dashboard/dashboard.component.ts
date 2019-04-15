import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroes : Hero[];

  constructor(private heroService : HeroService) { }

  getTopHeroes(): void {
    this.heroService.getHeroes().
    subscribe(heroes => this.topHeroes = heroes.slice(1,5));
  }

  ngOnInit() {
    this.getTopHeroes();
  }
}
