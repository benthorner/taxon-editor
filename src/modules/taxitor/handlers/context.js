import {Item} from '../../taxmenu/item.js'
import {Taxmenu} from '../../taxmenu/taxmenu.js'

export class ContextHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.editor.g
      .selectAll(".node")
      .on("contextmenu", (d) => {
        d3.event.preventDefault()
        new Taxmenu(d3.event, this._options(d))
      })
  }

  _options(d) {
    var options = [
      new Item('Create child', () => {
        d.createChild().then((child) => {
          this.editor.trigger("beforeEnter")
          this.editor.trigger("nodeSelected", child)
        }).catch((e) => {
          this.editor.trigger("error", e)
        })
      })
    ]

    if (d.depth > 0) {
      options.push(new Item('Delete', () => {
        d.delete().then(() => {
          this.editor.trigger("nodeSelected", d.parent)
          this.editor.trigger("beforeEnter")
        }).catch((e) => {
          this.editor.trigger("error", e)
        })
      }))
    }

    return options
  }
}
