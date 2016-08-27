/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component, ViewChild, OnChanges, SimpleChanges} from "@angular/core";
import {BaCard} from "../../../../../theme/components/baCard";
import {ItemBatch} from "../../../../../model/ItemBatch";
import {ToastsManager} from "ng2-toastr/src/toast-manager";
import {GrnOrderService} from "../../../../../service/grn/GrnOrderService";
import {GrnOrder} from "../../../../../model/GrnOrder";
import {ItemService} from "../../../../../service/item/ItemService";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from "ng2-bootstrap";
import {BatchService} from "../../../../../service/batch/BatchService";

@Component({
  selector: 'grn-inventory',
  pipes: [],
  directives: [BaCard, MODAL_DIRECTIVES],
  styles: [],
  providers: [ToastsManager, GrnOrderService, ItemService, BatchService, BS_VIEW_PROVIDERS],
  template: require('./grnInventory.html')
})
export class GrnItemInventory implements OnChanges {


  @ViewChild("itemBox") itemBox;


  items = []
  units = ['ltr', 'kg', 'pcs']

  model = new ItemBatch();

  itemBatches: ItemBatch[] = [];

  grnOrderModel: GrnOrder;


  constructor(
              private _toast: ToastsManager,
              private _grnService: GrnOrderService,
              private _itemService: ItemService,
              private _batchService: BatchService) {
    this.grnOrderModel = this._grnService.getModel();
  }


  ngOnInit() {
    this._itemService.getAll(0, 100).subscribe(
      (data)=>this.items = data.json()
    )
  }


  /**
   *
   * Add Item TO GRN Order
   *
   */
  createOrder() {
    if (this.model.itemCode && this.model.unitBuyingPrice && this.model.numberOfUnits && this.model.unit) {

      this.model.grnCode = this.grnOrderModel.code;
      // let itemCode=this.model.item;
// Message


      this._batchService.createBatch(this.model).subscribe(
        (data)=> {

          let response = data.json();
          if (response && response.type && response.type == 'ERROR') {
            this._toast.error(response.message, "Error");
          } else {
            this.model = data.json();
            this.process(this.model);

            this.itemBatches.push(this.model);


            if (this.itemExists(this.model.itemCode)) {
              this._toast.warning("Added ")
              // this.staticModal.show();
            } else {
              this._toast.success("Successfully added Item", "Success");
            }

            this.model = new ItemBatch();
            this.itemBox.nativeElement.focus();
          }


        }
      )


    } else {
      // Message
      this._toast.error("Please fill all necessary fields", "Oops!");
    }
  }


  /**
   *
   * Check Item exists
   *
   * @param item
   * @returns {any}
   */
  itemExists(item: string): ItemBatch {

    for (let batch of this.itemBatches) {
      console.log(batch.itemCode == item)
      if (batch.itemCode == item) {
        return batch
      }
    }
    return null;
  }


  /**
   *
   * Select Batch For update
   *
   * @param batch
   * @param index
   */
  update(batch: ItemBatch, index, isDelete) {

    if (!isDelete) {
      this.model = batch;
    } else {
      this._batchService.delete(batch).subscribe(
        (data)=>this._toast.success("Delete Item success")
      )
    }

    this.grnOrderModel.orderTotal -= batch.unitBuyingPrice * batch.numberOfUnits;
    this.grnOrderModel.orderTotalPcs -= batch.numberOfUnits;
    delete  this.grnOrderModel.batches.splice(index, 1);
    delete  this.itemBatches.splice(index, 1);


  }


  /**
   * Process Grn ORDER Model
   *
   * @param model
   */
  private process(batch: ItemBatch) {
    this.grnOrderModel.orderTotal += batch.unitBuyingPrice * batch.numberOfUnits;
    this.grnOrderModel.orderTotalPcs += batch.numberOfUnits;


  }

  ngOnChanges(changes: SimpleChanges): any {
    console.log(changes)
    return undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }

}
