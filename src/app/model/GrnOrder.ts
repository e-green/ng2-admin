import {ItemBatch} from "./ItemBatch";
/**
 * Created by dewmal on 8/25/16.
 */
export class GrnOrder {
  constructor(public code: string = "",
              public supplierCode: string = "",
              public recivedTime: number = Date.now(),
              public employeeCode: string = "",
              public batches: ItemBatch[] = [],
              public orderTotal: number = 0,
              public orderTotalPcs: number = 0,
  ) {

  }
}
