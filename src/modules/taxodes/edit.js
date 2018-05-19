import {BaseTaxode} from './base.js'

export class EditTaxode extends BaseTaxode {
  get readonly() {
    return false
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
