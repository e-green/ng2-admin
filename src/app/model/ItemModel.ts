/**
 * Created by dewmal on 8/25/16.
 */
export class ItemModel {


  constructor(public code: string="",
              public name: string="",
              public unit: string="",
              public reOrderLevel: number=0,
              public category: string="") {
  }
}
