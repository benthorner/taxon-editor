import {Node as EditNode} from '../edit/node.js'

export class Node extends EditNode {
  save() {
    this.commit()
    return Promise.resolve()
  }

  delete() {
    return Promise.resolve()
  }
}
