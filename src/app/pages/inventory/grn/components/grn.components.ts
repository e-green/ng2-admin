/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from '@angular/core';
import {GRNAdd} from './add/grn.add.components';
import {ItemSummery} from "./grn-summery/grn.summery.components";
import {GrnItemInventory} from "./item-inventory/grn.inventory.components";

@Component({
  selector: 'grn',
  directives: [GRNAdd,GrnItemInventory],
  template: require('./Grn.html')
})
export class GRN {

  constructor() {
  }
}
