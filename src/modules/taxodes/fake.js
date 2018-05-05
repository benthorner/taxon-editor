import {BaseTaxode} from './base.js'
import {Link} from './fake/link.js'
import {Node} from './fake/node.js'

export class FakeTaxode extends BaseTaxode {
  constructor(parent) {
    super(parent)
    this.link = new Link(this)
    this.node = new Node(this)
    this.title = Math.random().toString(36).substring(5)
    this.description = Math.random().toString(36)
    this.id = this.title
  }

  build() {
    return new FakeTaxode()
  }

  get readonly() {
    false
  }
}
