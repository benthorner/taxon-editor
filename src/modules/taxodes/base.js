import {Link} from './base/link.js'
import {Tree} from './base/tree.js'
import {Node} from './base/node.js'
import {Docs} from './base/docs.js'

export class BaseTaxode {
  constructor(attributes, parent) {
    this.link = new Link(this)
    this.tree = new Tree(this)
    this.node = new Node(attributes)
    this.docs = new Docs(this)
    this.parent = parent
  }

  get id() {
    return this.node.get("id")
  }

  get readonly() {
    return true
  }
}
