import {SupplierModel} from "../../model/SupplierModel";
import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Constant} from "../../Gloabl";
import {UpdateSubscriber} from "../UpdateSubscriber";
import {CustomerModel} from "../../model/CustomerModel";
import {GsnOrderModel} from "../../model/OrderModel";
/**
 * Created by dewmal on 8/25/16.
 */
@Component({
    providers: [Http]
  }
)
export class GSNOrderService {
  static instance: GSNOrderService;

  constructor(private http: Http) {
    return GSNOrderService.instance = GSNOrderService.instance || this;
  }



  gsnOrderModel: GsnOrderModel = new GsnOrderModel();

  createModel(supplierCode: string) {

    return this.http.post(Constant.GSN_URL + '/save', {
      "employeeCode": "EMP_003"
    }).subscribe(
      (data)=> {
        this.gsnOrderModel.code = data.json().code;
        console.log(this.gsnOrderModel);
      }
    );
  }

  getModel(): GsnOrderModel {
    return this.gsnOrderModel;
  }

}
