/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from '@angular/core';
import {ItemAdd} from './add/item.add.components';
import {ItemSummery} from "./summery/item.summery.components";

@Component({
  selector: 'item',
  directives: [ItemAdd,ItemSummery],
  template: require('./item.html')
})
export class Item {

  constructor() {
  }
}
