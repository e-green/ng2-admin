import {Http} from "@angular/http";
import {Component} from "@angular/core";
import {Constant} from "../../Gloabl";
import {OrderItem} from "../../model/OrderItem";
/**
 * Created by dewmal on 8/27/16.
 */
// @Injectable
@Component({
    providers: [Http]
  }
)
export class OrderItemService {


  static instance: OrderItemService;

  constructor(private http: Http) {
    return OrderItemService.instance = OrderItemService.instance || this;
  }


  createBatch(orderItem: OrderItem) {
    return this.http.post(
      Constant.ORDER_ITEM_URL + "/save", {
        "itemCode": orderItem.itemCode,
        "unit": orderItem.unit,
        "numberOfUnits": orderItem.numberOfUnits,
        "unitPrice": orderItem.unitPrice,
        "unitDiscount": orderItem.unitDiscount,
        "totalDiscount": orderItem.totalDiscount
      }
    )
  }

  delete(batch: OrderItem) {
    return this.http.delete(Constant.ORDER_ITEM_URL + "/delete/" + batch.code);
  }
}
