import {Node as BaseNode} from '../base/node.js'

export class Node extends BaseNode {
  constructor(attributes) {
    super(attributes)
    this.tmpAttributes = { }
  }

  set(key, value) {
    this.tmpAttributes[key] = value
  }

  get(key) {
    return this.tmpAttributes[key] || this.attributes[key]
  }

  reset() {
    this.tmpAttributes = { }
  }

  commit() {
    this.attributes = _.extend(this.attributes, this.tmpAttributes)
    this.reset()
  }

  save() {
    return Promise.reject("Not supported")
  }

  delete() {
    return Promise.reject("Not supported")
  }
}
