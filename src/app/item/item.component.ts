import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  _ref: any;
  myControl: FormControl = new FormControl();
  weight: number;
  price: number;
  total = 0;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  options = [
    'ఇనుము',
    'అల్యూమినియం',
    'రాగి',
    'ప్లాస్టిక్',
   ];
  constructor() {}

  calTotal() {
    if (this.weight > 0 && this.price > 0) {
      this.total = this.weight * this.price;
    } else {
      this.total = 0;
    }
    this.change.emit({
      price: this.price,
      weight: this.weight,
      total: this.total
    });
  }
  removeObject() {
    this._ref.destroy();
  }
  ngOnInit() {

  }
}
