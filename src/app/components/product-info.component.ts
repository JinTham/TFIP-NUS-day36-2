import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit{

  productId!: string
  param$!: Subscription

  constructor(private activateRoute: ActivatedRoute){ }

  ngOnInit(): void {
      this.param$ = this.activateRoute.params.subscribe(
        (params) => {
          this.productId = params['pid'];
        }
      )
  }
}
