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
import {CustomerService} from "../../../../../service/customer/CustomerService";
import {CustomerModel} from "../../../../../model/CustomerModel";

@Component({
  selector: 'customer-add',
  pipes: [],
  directives: [BaCard],
  styles: [],
  providers: [NICValidator, ToastsManager, CustomerService],
  template: require('./customerAdd.html')
})
export class CustomerAdd {

  @ViewChild("customer_code") customerCode;
  customer: CustomerModel = new CustomerModel();

  constructor(private _nicValidator: NICValidator,
              private _toast: ToastsManager,
              private _customerService: CustomerService) {
  }

  saveCustomer() {
    if (this._nicValidator.validate(this.customer.nic)) {

      this._customerService.save(this.customer).subscribe(
        (data)=> {
          this._toast.success("CustomerModel saved successfully");
          this.customer = new CustomerModel();
          this.customerCode.nativeElement.focus();
        },
        (err)=>console.log(err),
        ()=>console.log('CustomerModel Add Done')
      )

    } else {
      this._toast.error("NIC Validation Error Enter again without V")
    }
  }
}
