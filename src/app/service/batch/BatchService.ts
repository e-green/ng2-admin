import {Http} from "@angular/http";
import {Component} from "@angular/core";
import {ItemBatch} from "../../model/ItemBatch";
import {Constant} from "../../Gloabl";
/**
 * Created by dewmal on 8/27/16.
 */
// @Injectable
@Component({
    providers: [Http]
  }
)
export class BatchService {


  static instance: BatchService;

  constructor(private http: Http) {
    return BatchService.instance = BatchService.instance || this;
  }


  createBatch(batchItem: ItemBatch) {
    return this.http.post(
      Constant.BATCH_URL + "/save", {
        "code": batchItem.code,
        "itemCode": batchItem.itemCode,
        "grnCode": batchItem.grnCode,
        "unitBuyingPrice": batchItem.unitBuyingPrice,
        "numberOfUnits": batchItem.numberOfUnits,
        "unit": batchItem.unit
      }
    )
  }

  delete(batch: ItemBatch) {
    return this.http.delete(Constant.BATCH_URL + "/delete/" + batch.code);
  }
}
