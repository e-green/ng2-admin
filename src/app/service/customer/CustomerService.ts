import {SupplierModel} from "../../model/SupplierModel";
import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Constant} from "../../Gloabl";
import {UpdateSubscriber} from "../UpdateSubscriber";
import {CustomerModel} from "../../model/CustomerModel";
/**
 * Created by dewmal on 8/25/16.
 */
@Component({
    providers: [Http]
  }
)
export class CustomerService {
  static instance: CustomerService;

  constructor(private http: Http) {
    return CustomerService.instance = CustomerService.instance || this;
  }


  supplier: CustomerModel = new CustomerModel();


  /**
   *
   *
   * @param offset
   * @param limit
   * @returns {Observable<Response>}
   */
  getAll(offset, limit) {
    return this.http.get(Constant.CUSTOMER_URL + "/getAll/" + offset + "/" + limit);
  }


  /**
   * Save SupplierModel
   * @param customer
   * @returns {Observable<Response>}
   */
  save(customer: CustomerModel) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let subscribe = this.http.post(Constant.CUSTOMER_URL + "/save", JSON.stringify(
      {
        "code": customer.code + '',
        "name": customer.name + '',
        "nic": customer.nic + ''
      }
    ), {
      headers: headers
    });

    return subscribe;
  }

}
