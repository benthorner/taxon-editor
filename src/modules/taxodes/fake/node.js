import {FakeTaxode} from '../fake.js'

export class Node {
  constructor(node) {
    this.node = node
  }

  save() {
    return Promise.resolve()
  }

  delete() {
    return Promise.resolve()
  }
}
