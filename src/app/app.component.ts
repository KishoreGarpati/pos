import { Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  total: number;
  itemList = [];
  constructor(private _cfr: ComponentFactoryResolver) {}

  addComponent() {
    const comp = this._cfr.resolveComponentFactory(ItemComponent);
    const itemComponent = this.container.createComponent(comp);
    itemComponent.instance._ref = itemComponent;
    itemComponent.instance.change.subscribe(
      (event: any) => {
        this.getTotal();
      }
    );
    this.itemList.push(itemComponent.instance);
  }
  getTotal() {
    let sum = 0;
    this.itemList.forEach(function(item) {
      sum = sum + item.total;
    });
    console.log('sum is: ' + sum);
    this.total = sum;
  }
  setTotal(total) {
    this.total = total;
  }
}
