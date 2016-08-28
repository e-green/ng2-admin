/**
 * Created by dewmal on 8/28/16.
 */
export class OrderItem {


  constructor(

    public gsnCode: string = "",
    public code: string = "",
              public  itemCode: string = "",
              public   unit: string = "",
              public   numberOfUnits: number = 0,
              public   unitPrice: number = 0,
              public   unitDiscount: number = 0,
              public   totalDiscount: number = 0) {
  }
}
