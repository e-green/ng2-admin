/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component, ViewChild, OnChanges, SimpleChanges} from "@angular/core";
import {BaCard} from "../../../../../theme/components/baCard";
import {ToastsManager} from "ng2-toastr/src/toast-manager";
import {ItemService} from "../../../../../service/item/ItemService";
import {GSNOrderService} from "../../../../../service/gsn/GSNOrderService";
import {GsnOrderModel} from "../../../../../model/OrderModel";
import {OrderItem} from "../../../../../model/OrderItem";
import {OrderItemService} from "../../../../../service/orderItem/OrderItemService";

@Component({
  selector: 'gsn-inventory',
  pipes: [],
  directives: [BaCard],
  styles: [],
  providers: [ToastsManager, GSNOrderService, ItemService, OrderItemService],
  template: require('./gsnInventory.html')
})
export class GsnItemInventory implements OnChanges {


  @ViewChild("itemBox") itemBox;


  items = []
  units = ['ltr', 'kg', 'pcs']

  model = new OrderItem();

  itemBatches: OrderItem[] = [];

  gsnOrderModel: GsnOrderModel;


  constructor(private _toast: ToastsManager,
              private _gsnService: GSNOrderService,
              private _itemService: ItemService,
              private _orderItemService: OrderItemService) {
    this.gsnOrderModel = this._gsnService.getModel();
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
  addItemToOrder() {
    if (this.model.itemCode && this.model.numberOfUnits) {

      this.model.gsnCode = this.gsnOrderModel.code;
      // let itemCode=this.model.item;
// Message


      this._orderItemService.createBatch(this.model).subscribe(
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

            this.model = new OrderItem();
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
  itemExists(item: string): OrderItem {

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
   * @param orderItem
   * @param index
   */
  update(orderItem: OrderItem, index, isDelete) {


    if (!isDelete) {
      this.model = orderItem;
    } else {
      this._orderItemService.delete(orderItem).subscribe(
        (data)=>this._toast.success("Delete Item success")
      )
    }

    this.gsnOrderModel.orderTotal -= orderItem.unitPrice * orderItem.numberOfUnits;
    this.gsnOrderModel.orderTotalPcs -= orderItem.numberOfUnits;
    delete  this.gsnOrderModel.orderItemModels.splice(index, 1);
    delete  this.itemBatches.splice(index, 1);


  }


  /**
   * Process Grn ORDER Model
   *
   * @param model
   */
  private process(orderItem: OrderItem) {
    this.gsnOrderModel.orderTotal += orderItem.unitPrice * orderItem.numberOfUnits;
    this.gsnOrderModel.orderTotalPcs += orderItem.numberOfUnits;


  }

  ngOnChanges(changes: SimpleChanges): any {
    console.log(changes)
    return undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }

}
