import {ItemBatch} from "./ItemBatch";
/**
 * Created by dewmal on 8/28/16.
 */
export class GsnOrderModel {

  constructor(public code: string = "",
              public orderDate: number = Date.now(),
              public orderFinishDate: number = Date.now(),
              public customerCode: string = "",
              public employeeCode: string = "",
              public orderTotal: number = 0,
              public orderTotalPcs: number = 0,
              public orderDiscountRate: number = 0,
              public orderFixDiscount: number = 0,
              public orderTaxRate: number = 0,
              public orderItemModels: ItemBatch[] = []) {
  }

}
