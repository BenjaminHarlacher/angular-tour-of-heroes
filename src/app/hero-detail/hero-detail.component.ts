import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{
  //hero: Hero;
  heronames = [];
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private dataService: DataService
  ) {}

  ngOnInit(){
    //this.getHero();
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.heronames = data;
    })
  }

  

  /*getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }*/
}