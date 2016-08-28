/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from "@angular/core";
import {BaCard} from "../../../../../theme/components/baCard";
import {RouterLink} from "@angular/router";
import {SupplierService} from "../../../../../service/supplier/SupplierService";
import {AutoComplete} from "../../../../components/components/autocomplete/autocomplete.component";
import {CustomerService} from "../../../../../service/customer/CustomerService";

@Component({
  selector: 'customer-summery',
  pipes: [],
  directives: [BaCard, RouterLink],
  styles: [],
  providers: [CustomerService],
  template: require('./customerSummery.html')
})
export class CustomerSummery {

  customers: any[] = [];

  model =[
    {"id":1,"name":"Red"},
    {"id":2,"name":"Orange"},
    {"id":3,"name":"Greeen"}
  ];
  results = [];

  constructor(private _customerService: CustomerService) {
  }

  ngOnInit() {
    this._customerService.getAll(0, 100).subscribe(
      (data)=>this.customers = data.json(),
      (error)=>console.log(error),
      ()=>console.log("done")
    )
  }
}
