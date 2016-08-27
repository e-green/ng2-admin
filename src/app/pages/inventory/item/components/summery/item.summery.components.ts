/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from "@angular/core";
import {BaCard} from "../../../../../theme/components/baCard";
import {RouterLink} from "@angular/router";
import {ItemService} from "../../../../../service/item/ItemService";

@Component({
  selector: 'item-summery',
  pipes: [],
  directives: [BaCard, RouterLink],
  providers: [ItemService],
  styles: [],
  template: require('./itemSummery.html')
})
export class ItemSummery {

  items: any[] = [];

  constructor(private _itemService: ItemService) {
  }

  ngOnInit() {

    this._itemService.getAll(0, 100).subscribe(
      (data)=> {
        this.items = data.json();
      }
    )
  }
}
