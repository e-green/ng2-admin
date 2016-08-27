import {SupplierModel} from "../../model/SupplierModel";
import {Component} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Constant} from "../../Gloabl";
import {UpdateSubscriber} from "../UpdateSubscriber";
/**
 * Created by dewmal on 8/25/16.
 */
@Component({
    providers: [Http]
  }
)
export class SupplierService {
  static instance: SupplierService;

  constructor(private http: Http) {
    return SupplierService.instance = SupplierService.instance || this;
  }


  supplier: SupplierModel = new SupplierModel();



  /**
   *
   *
   * @param offset
   * @param limit
   * @returns {Observable<Response>}
   */
  getAll(offset, limit) {
    return this.http.get(Constant.SUPPLIER_URL + "/getAll/" + offset + "/" + limit);
  }


  /**
   * Save SupplierModel
   * @param supplier
   * @returns {Observable<Response>}
   */
  save(supplier: SupplierModel) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let subscribe = this.http.post(Constant.SUPPLIER_URL + "/save", JSON.stringify(
      {
        "code": supplier.code + '',
        "name": supplier.name + '',
        "nic": supplier.nic + '',
        "tpNumber": supplier.tpNumber + ''
      }
    ), {
      headers: headers
    });

    return subscribe;
  }

}
