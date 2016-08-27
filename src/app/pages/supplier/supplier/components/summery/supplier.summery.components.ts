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

@Component({
  selector: 'supplier-summery',
  pipes: [],
  directives: [BaCard, RouterLink],
  styles: [],
  providers: [SupplierService],
  template: require('./supplierSummery.html')
})
export class SupplierSummery {

  suppliers: any[] = [];

  model =[
    {"id":1,"name":"Red"},
    {"id":2,"name":"Orange"},
    {"id":3,"name":"Greeen"}
  ];
  results = [];

  constructor(private _supplierService: SupplierService) {
  }

  ngOnInit() {
    this._supplierService.getAll(0, 100).subscribe(
      (data)=>this.suppliers = data.json(),
      (error)=>console.log(error),
      ()=>console.log("done")
    )
  }
}
