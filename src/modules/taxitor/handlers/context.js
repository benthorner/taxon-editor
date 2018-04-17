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
        new Taxmenu(d3.event, this.menu.call(d))
      })
  }
}
