import {GrnOrder} from "../../model/GrnOrder";
import {Http} from "@angular/http";
import {Component} from "@angular/core";
import {Constant} from "../../Gloabl";
/**
 * Created by dewmal on 8/25/16.
 */

// @Injectable
@Component({
    providers: [Http]
  }
)
export class GrnOrderService {
  static instance: GrnOrderService;

  constructor(private http: Http) {
    return GrnOrderService.instance = GrnOrderService.instance || this;
  }


  grnOrderModel: GrnOrder = new GrnOrder();

  createModel(supplierCode: string) {

    return this.http.post(Constant.GRN_URL + '/save', {
      "supplierCode": supplierCode
    }).subscribe(
      (data)=> {
        this.grnOrderModel.code = data.json().code;
        console.log(this.grnOrderModel);
      }
    );
  }

  getModel(): GrnOrder {
    return this.grnOrderModel;
  }

  finish(grnModel: GrnOrder) {
    return this.http.post(Constant.GRN_URL + '/finish', {
      "code": grnModel.code
    }).map(
      (data)=> {
        console.log(data.json());
        this.grnOrderModel = new GrnOrder();
        // this.grnOrderModel.code = data.json().code;
        // console.log(this.grnOrderModel);
      }
    );
  }
}
