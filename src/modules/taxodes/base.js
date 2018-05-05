import {Link} from './base/link.js'
import {Tree} from './base/tree.js'
import {Node} from './base/node.js'

export class BaseTaxode {
  constructor(parent) {
    this.link = new Link(this)
    this.tree = new Tree(this)
    this.node = new Node(this)
    this.parent = parent
  }

  build() {
    return new BaseTaxode()
  }

  get readonly() {
    return true
  }

  createChild() {
    var child = this.build()

    return child.node.save().then(() => {
      return this.link.create(child)
    }).then(() => {
      return Promise.resolve(child)
    })
  }

  delete() {
    return this.link.delete().then(() => {
      return this.node.delete()
    })
  }
}
