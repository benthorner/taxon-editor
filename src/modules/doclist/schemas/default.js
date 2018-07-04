import {LabelTaxele} from '../../taxeles/label.js'

export class DefaultSchema {
  doc(d) {
    return [new LabelTaxele(d, "title"),
            new LabelTaxele(d, "description")]
  }
}
