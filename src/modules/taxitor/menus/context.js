import {Item} from '../../taxmenu/item.js'

export class ContextMenu {
  constructor(editor) {
    this.editor = editor
  }

  items(d) {
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
