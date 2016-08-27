/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component, Inject} from '@angular/core';
import {BaCard} from '../../../../../theme/components/baCard'
import {GRNAdd} from "../add/grn.add.components";
import {GrnItemInventory} from "../item-inventory/grn.inventory.components";
import {GrnOrder} from "../../../../../model/GrnOrder";
import {GrnOrderService} from "../../../../../service/grn/GrnOrderService";
import {ToastsManager} from "ng2-toastr/src/toast-manager";

@Component({
  selector: 'grn-order-create',
  pipes: [],
  directives: [BaCard, GrnItemInventory, GRNAdd],
  styles: [],
  providers: [ToastsManager, GrnOrderService],
  template: require('./grn-order-create-add.html')
})
export class GrnOrderCreate {

  orderTotal: number = 0;
  code: string = "GRN_CODE";

  grnOrderModel: GrnOrder;


  constructor(private _grnService: GrnOrderService) {
    this.grnOrderModel = this._grnService.getModel();
  }


}
