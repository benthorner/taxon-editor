import {EditTaxode} from './edit.js'
import {Link} from './fake/link.js'
import {Node} from './fake/node.js'
import {Docs} from './fake/docs.js'

export class FakeTaxode extends EditTaxode {
  constructor(parent) {
    var attributes = {
      title: "title-" + Math.random().toString(36).substring(5),
      description: "descr-" + Math.random().toString(36),
      id: "id-" + Math.random().toString(36).substring(5)
    }

    super(attributes, parent)
    this.link = new Link(this)
    this.docs = new Docs(this)
    this.node = new Node(attributes)
  }

  build() {
    return new FakeTaxode()
  }
}
