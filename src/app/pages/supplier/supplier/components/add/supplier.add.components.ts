/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component, ViewChild} from '@angular/core';
import {BaCard} from '../../../../../theme/components/baCard'
import {SupplierModel} from "../../../../../model/SupplierModel";
import {NICValidator} from "../../../../../service/validation/NICValidator";
import {ToastsManager} from "ng2-toastr/src/toast-manager";
import {SupplierService} from "../../../../../service/supplier/SupplierService";

@Component({
  selector: 'supplier-add',
  pipes: [],
  directives: [BaCard],
  styles: [],
  providers: [NICValidator, ToastsManager, SupplierService],
  template: require('./supplierAdd.html')
})
export class SupplierAdd {

  @ViewChild("supplier_code") supplierCode;
  supplier: SupplierModel = new SupplierModel();

  constructor(private _nicValidator: NICValidator,
              private _toast: ToastsManager,
              private _supplierService: SupplierService) {
  }

  saveSupplier() {
    if (this._nicValidator.validate(this.supplier.nic)) {

      this._supplierService.save(this.supplier).subscribe(
        (data)=> {
          this._toast.success("SupplierModel saved successfully");
          this.supplier = new SupplierModel();
          this.supplierCode.nativeElement.focus();
        },
        (err)=>console.log(err),
        ()=>console.log('SupplierModel Add Done')
      )

    } else {
      this._toast.error("NIC Validation Error Enter again without V")
    }
  }
}
