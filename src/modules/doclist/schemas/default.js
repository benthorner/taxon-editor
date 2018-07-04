import {LabelTaxele} from '../../taxeles/label.js'

export class DefaultSchema {
  doc(div, d) {
    new LabelTaxele(d, "title").attach(div)
    new LabelTaxele(d, "description").attach(div)
  }
}
