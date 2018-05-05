import {FakeTaxode} from '../fake.js'
import {Link as LinkBase} from '../base/link.js'

export class Link extends LinkBase {
  constructor(node) {
    super(node)
  }

  fetch() {
    this.node.children = [new FakeTaxode(this.node),
                          new FakeTaxode(this.node)]

    return Promise.resolve()
  }

  save() {
    return Promise.resolve()
  }
}
