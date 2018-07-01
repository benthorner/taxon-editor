import {Item} from '../../taxmenu/item.js'
import {Taxmenu} from '../../taxmenu/taxmenu.js'
import {DragMenu} from '../menus/drag.js'

export class DragHandler {
  constructor(editor) {
    this.editor = editor
    this.menu = new DragMenu(this.editor)
    this.editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    var drag = d3.drag()
      .on("drag", this._onDrag.bind(this))
      .on("end", this._onDragEnd.bind(this))

    this.editor.element
      .selectAll(".node")
      .call(drag)
      .on("mouseover", this._onMouseOver.bind(this))
  }

  _onDrag(d, i, nodes) {
    d.x = d3.event.x
    d.y = d3.event.y
    d3.event.sourceEvent.stopPropagation()

    d3.select(nodes[i])
      .lower()
      .attr("transform", (d) => `translate(${d.x},${d.y})`)

    this.editor.element
      .selectAll(".link")
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)
  }

  _onDragEnd(d) {
    if (d == this.dragObject) return
    var cancel = () => this.editor.trigger("beforeExit")
    var items = this.menu.items(d, this.dragObject)
    if (!items.length) { cancel(); return }
    new Taxmenu(items, cancel).attach("body")
  }

  _onMouseOver(d) {
    this.dragObject = d
  }
}
