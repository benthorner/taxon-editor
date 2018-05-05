import {BaseTaxode} from './base.js'
import {Link} from './fake/link.js'

export class FakeTaxode extends BaseTaxode {
  constructor(parent) {
    super(parent)
    this.link = new Link(this)
    this.title = Math.random().toString(36).substring(5)
    this.description = Math.random().toString(36)
    this.id = this.title
  }

  createChild() {
    var child = new FakeTaxode(this)
    this.children.push(child)
    return Promise.resolve(child)
  }

  delete() {
    this.parent.children = _.without(this.parent.children, this)
    return Promise.resolve()
  }
}
