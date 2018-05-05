import {Link} from './base/link.js'
import {Tree} from './base/tree.js'

export class BaseTaxode {
  constructor(parent) {
    this.link = new Link(this)
    this.tree = new Tree(this)
    this.parent = parent
  }
}
