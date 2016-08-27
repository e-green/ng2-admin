/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from '@angular/core';
import {BaCard} from '../../../../../theme/components/baCard'
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../../../../service/item/ItemService";

@Component({
  selector: 'item-inventory',
  pipes: [],
  directives: [BaCard],
  styles: [],
  providers: [ItemService],
  template: require('./itemInventory.html')
})
export class ItemInventory {
  code: any;
  paramsSub: any;
  itemModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _itemService: ItemService) {
  }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.code = (params['code']));

    this._itemService.get(this.code).subscribe(
      (data)=> {
        this.itemModel = data.json();
      }
    )
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
