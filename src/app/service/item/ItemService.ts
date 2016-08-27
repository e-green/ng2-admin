import {Http, Headers} from "@angular/http";
import {Constant} from "../../Gloabl";
import {ItemModel} from "../../model/ItemModel";
import {Component} from "@angular/core";
/**
 * Created by dewmal on 8/25/16.
 */
@Component({
    providers: [Http]
  }
)
export class ItemService {
  // static instance: ItemService;


  constructor(private http: Http) {
    // return ItemService.instance = ItemService.instance || this;
  }


  /**
   *
   * Get All Products by limit and offset
   *
   * @param offset
   * @param limit
   * @returns {Observable<Response>}
   */
  getAll(offset, limit) {
    return this.http.get(Constant.PRODUCT_URL + "/getAll/" + offset + "/" + limit);
  }


  save(item: ItemModel) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(Constant.PRODUCT_URL + "/save", JSON.stringify({
      "name": item.name,
      "code": item.code,
      "category": item.category
    }), {
      headers: headers
    });
  }

  /**
   * Get Code
   * *
   * @param code
   * @returns {Observable<Response>}
   */
  get(code: string) {
    return this.http.get(Constant.PRODUCT_URL + "/get/" + code);
  }
}
