/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component, ViewChild} from '@angular/core';
import {BaCard} from '../../../../../theme/components/baCard'
import {ToastsManager} from "ng2-toastr/src/toast-manager";
import {ItemService} from "../../../../../service/item/ItemService";
import {ItemModel} from "../../../../../model/ItemModel";

@Component({
  selector: 'item-add',
  pipes: [],
  directives: [BaCard],
  styles: [],
  providers: [ToastsManager, ItemService],
  template: require('./itemAdd.html')
})
export class ItemAdd {

  @ViewChild("item_code") itemCode;

  // itemModel: ItemModel = new ItemModel()
  itemModel: ItemModel = new ItemModel();

  constructor(private _toast: ToastsManager, private _itemService: ItemService) {
  }


  itemAdd() {
    if (this.itemModel.name && this.itemModel.code && this.itemModel.unit && this.itemModel.reOrderLevel) {

      this._itemService.save(this.itemModel).subscribe(
        data => {
          this.finalizeAddItemProcess(data);

        },
        err => console.log(err),
        () => console.log('Authentication Complete')
      );
      console.log(this.itemModel);
    } else {
      this._toast.error("Please fill all fields");
    }
  }

  private finalizeAddItemProcess(data) {
    this.itemModel = new ItemModel();
    this.itemCode.nativeElement.focus();
    this._toast.success("Item added successfully");
  }
}
