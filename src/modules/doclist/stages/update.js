import {DefaultSchema} from '../schemas/default.js'

export class UpdateStage {
  constructor(list) {
    this.list = list
    this.schema = new DefaultSchema()
    this.list.on("onUpdate", this.onUpdate, this)
  }

  onUpdate() {
    this.list.element
      .selectAll(".doc *")
      .remove()

    this.list.element
      .selectAll(".doc")
      .each(this._attachDoc.bind(this))
  }

  _attachDoc(d, i, docs) {
    for (var element of this.schema.doc(d)) {
      element.attach(docs[i])
    }
  }
}
