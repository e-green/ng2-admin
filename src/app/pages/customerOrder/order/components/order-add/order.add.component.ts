import {Component} from "@angular/core";
import {BaCard} from "../../../../../theme/components/baCard/baCard.component";
import {GsnOrderModel} from "../../../../../model/OrderModel";
import {GSNOrderService} from "../../../../../service/gsn/GSNOrderService";
import {GsnItemInventory} from "../order-item-list/gsn.item.inventory.components";
/**
 * Created by dewmal on 8/28/16.
 */

@Component({
    selector: "customer-order-add",
    directives: [BaCard,GsnItemInventory],
    providers: [GSNOrderService],
    template: require('./order.add.component.html')
  }
)
export class CustomerOrderAddView {
  gsnOrderModel: GsnOrderModel;


  constructor(private _gsnService: GSNOrderService) {
    this._gsnService.createModel("Anonymus");

  }

  ngOnInit() {
    this.gsnOrderModel = this._gsnService.getModel();
  }
}
