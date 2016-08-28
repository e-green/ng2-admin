/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from '@angular/core';
import {CustomerOrderAddView} from "./components/order-add/order.add.component";
import {BaCard} from "../../../theme/components/baCard/baCard.component";
import {BaCardBlur} from "../../../theme/components/baCard/baCardBlur.directive";
import {GsnOrderModel} from "../../../model/OrderModel";

@Component({
  selector: 'customer-order',
  pipes: [],
  directives: [CustomerOrderAddView,BaCard],
  providers: [],
  styles: [],
  template: require('./customer.order.html')
})
export class CustomerOrderView {



  constructor() {
  }
}
