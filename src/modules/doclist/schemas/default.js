import {LabelTaxele} from '../../taxeles/label.js'

export class DefaultSchema {
  doc(d) {
    return [new LabelTaxele("title", d),
            new LabelTaxele("description", d)]
  }
}
