
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  errMess: string;
  dishes: Dish[];

  

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }
  
  ngOnInit() {
     this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }

    

}

