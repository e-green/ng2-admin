/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from "@angular/core";
import {CustomerAdd} from "./add/customer.add.components";
import {CustomerSummery} from "./summery/customer.summery.components";

@Component({
  selector: 'supplier',
  directives: [CustomerAdd, CustomerSummery],
  template: require('./customer.html')
})
export class CustomerView {

  constructor() {
  }
}
