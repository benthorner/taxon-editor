import {Item} from '../../taxmenu/item.js'

export class ContextMenu {
  constructor(editor) {
    this.editor = editor
  }

  items(d) {
    var options = []

    if (!d.readonly && d.children) {
      options.push(new Item('Create child', () => {
        d.createChild().then((child) => {
          this.editor.trigger("beforeEnter")
          this.editor.trigger("nodeSelected", child)
        }).catch((e) => {
          this.editor.trigger("error", e)
        })
      }))
    }

    if (!d.readonly && d.parent) {
      options.push(new Item('Delete', () => {
        d.delete().then(() => {
          this.editor.trigger("beforeEnter")
        }).catch((e) => {
          this.editor.trigger("error", e)
        })
      }))
    }

    return options
  }
}
