/**
 * Created by dewmal on 8/25/16.
 */

export class NICValidator {

  static instance: NICValidator;

  constructor() {
    return NICValidator.instance = NICValidator.instance || this;
  }

  /**
   *
   * NIC Length should be 9 or 12 and no need to enter v with it
   *
   * @param nic
   * @returns {boolean}
   */
  validate(nic: string): boolean {

    let nicLength: number = (nic + '').length;
    if (nicLength == 9 || nicLength == 12) {
      return true;
    } else {
      return false;
    }
  }

}
