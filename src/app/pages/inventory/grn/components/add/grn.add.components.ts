/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from "@angular/core";
import {BaCard} from "../../../../../theme/components/baCard";
import {GrnOrderService} from "../../../../../service/grn/GrnOrderService";
import {GrnOrder} from "../../../../../model/GrnOrder";
import {ToastsManager} from "ng2-toastr/src/toast-manager";
import {ItemService} from "../../../../../service/item/ItemService";
import {SupplierService} from "../../../../../service/supplier/SupplierService";
// import {ROUTER_DIRECTIVES, Router} from "@angular/router";


let window: any

@Component({
  selector: 'grn-add',
  pipes: [],
  directives: [BaCard],
  styles: [],
  providers: [GrnOrderService, ToastsManager, ItemService, SupplierService],
  template: require('./grn-order-add.html')
})
export class GRNAdd {


  grnModel: GrnOrder;

  suppliers: any[] = [];
  items: any[] = [];


  constructor(
              private _grnService: GrnOrderService,
              private _itemService: ItemService,
              private _supplierService: SupplierService,
              private _toast: ToastsManager) {
    this
      .
      grnModel = this._grnService.getModel();
  }


  ngOnInit() {
    this._supplierService.getAll(0, 100).subscribe(
      (data)=>this.suppliers = data.json()
    )

    this._itemService.getAll(0, 100).subscribe(
      (data)=>this.items = data.json()
    )
  }

  /**
   *  Create GRN Order
   */
  createGrn() {
    if (this.grnModel.supplierCode && this.grnModel.recivedTime) {
      console.log(this.grnModel);
      this._grnService.createModel(this.grnModel.supplierCode);
    } else {
      this._toast.error("Please fill all forms")
    }
  }

  /**
   * Finish GRN ORder
   *
   */
  finishGrn() {
    console.log(this.grnModel);
    this._grnService.finish(this.grnModel).subscribe(
      (data)=> {
        this.grnModel = this._grnService.getModel();
        this._toast.success("Grn Order Completed", "Hurray !!");
        // this._router.navigate(['/pages/inventory']);
      }
    )

  }

}
