import { Component, OnInit } from '@angular/core';
import { FeesService } from './fees.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
  products: any[] = [];

  constructor(private feesService: FeesService) {}

  ngOnInit() {
    this.fetchFeesData();
  }

  fetchFeesData() {
    this.feesService.getFeesData().subscribe(
      (data) => {
        this.products = data; // Assign fetched data to a variable
      },
      (error) => {
        console.error('Error fetching fees data', error);
      }
    );
  }
}
