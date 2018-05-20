import {FakeTaxode} from '../fake.js'
import {Node as EditNode} from '../edit/node.js'

export class Node extends EditNode {
  save() {
    return Promise.resolve()
  }

  delete() {
    return Promise.resolve()
  }
}
