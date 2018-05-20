import {Node as BaseNode} from '../base/node.js'

export class Node extends BaseNode {
  set(key, value) {
    this.attributes[key] = value
  }

  save() {
    return Promise.reject("Not supported")
  }

  delete() {
    return Promise.reject("Not supported")
  }
}
