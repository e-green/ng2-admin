/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from "@angular/core";
import {SupplierAdd} from "./add/supplier.add.components";
import {SupplierSummery} from "./summery/supplier.summery.components";

@Component({
  selector: 'supplier',
  directives: [SupplierAdd, SupplierSummery],
  template: require('./supplier.html')
})
export class SupplierView {

  constructor() {
  }
}
