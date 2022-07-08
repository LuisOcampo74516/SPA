import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes:any[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router ) { }

  ngOnInit(): void {
    this.heroes= this.heroesService.getHeroes();
    console.log(this.heroes)
  }

   verHeroe(id:any){
    this.router.navigate(['/heroe', id]);

   }
}
