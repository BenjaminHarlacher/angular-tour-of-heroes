import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  //heronames = [];
  //constructor(private dataService: DataService) { }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    /*this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.heronames = data.slice(0,4);
    })  */
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}