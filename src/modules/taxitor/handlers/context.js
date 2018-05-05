import {Taxmenu} from '../../taxmenu/taxmenu.js'
import {ContextMenu} from '../menus/context.js'

export class ContextHandler {
  constructor(editor) {
    this.editor = editor
    this.menu = new ContextMenu(this.editor)
    this.editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.editor.g
      .selectAll(".node")
      .on("contextmenu", (d) => {
        d3.event.preventDefault()
        var items = this.menu.items(d)

        if (!items.length) return
        new Taxmenu(d3.event, items).attach("body")
      })
  }
}
