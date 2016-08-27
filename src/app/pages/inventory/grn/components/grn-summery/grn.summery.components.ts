/**
 * Created by dewmal on 8/24/16.
 */
/**
 * Created by dewmal on 8/24/16.
 */
import {Component} from '@angular/core';
import {BaCard} from '../../../../../theme/components/baCard'
import {RouterLink} from "@angular/router";

@Component({
  selector: 'item-summery',
  pipes: [],
  directives: [BaCard,RouterLink],
  styles: [],
  template: require('./GrnSummery.html')
})
export class ItemSummery {

  constructor() {
  }
}
