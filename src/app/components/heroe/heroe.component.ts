import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activateRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private router:Router) {

  this.activateRoute.params.subscribe(params => {
    console.log('esto es lo que viene en el valor a id' + params['id']);
    this.heroe = this.heroeService.getHeroe(params['id']);
    console.log(this.heroe)
  });

   }

  ngOnInit(): void {
   
  }
  verHeroes(){
    this.router.navigate(['/heroes']);

  }

}
