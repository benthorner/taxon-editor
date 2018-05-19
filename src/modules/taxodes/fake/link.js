import {FakeTaxode} from '../fake.js'
import {Link as LinkBase} from '../base/link.js'

export class Link extends LinkBase {
  constructor(taxode) {
    super(taxode)
  }

  fetch() {
    this.taxode.children = [new FakeTaxode(this.taxode),
                            new FakeTaxode(this.taxode)]

    return Promise.resolve()
  }

  save() {
    return Promise.resolve()
  }
}
