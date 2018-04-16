import {BaseTaxode} from './base.js'

export class FakeTaxode extends BaseTaxode {
  constructor(parent) {
    super(parent)
    this.title = Math.random().toString(36).substring(5)
    this.description = Math.random().toString(36)
    this.id = this.title
  }

  expand() {
    this._children = [new FakeTaxode(this), new FakeTaxode(this)]
    return Promise.resolve()
  }

  contract() {
    this._children = []
    return Promise.resolve()
  }

  createChild() {
    var child = new FakeTaxode(this)
    this._children.push(child)
    return Promise.resolve(child)
  }

  delete() {
    this.parent._children = _.without(this.parent._children, this)
    return Promise.resolve()
  }
}
