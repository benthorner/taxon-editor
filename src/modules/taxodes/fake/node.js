import {FakeTaxode} from '../fake.js'
import {Node as NodeBase} from '../base/node.js'

export class Node extends NodeBase {
  constructor(taxode, attributes) {
    super(taxode, attributes)
  }

  save() {
    return Promise.resolve()
  }

  delete() {
    return Promise.resolve()
  }
}
