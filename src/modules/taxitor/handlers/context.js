import {Item} from '../../taxmenu/item.js'
import {Taxmenu} from '../../taxmenu/taxmenu.js'

export function ContextHandler(editor) {
  this.editor = editor
  this.editor.on("afterEnter", this.afterEnter, this)
}

ContextHandler.prototype.afterEnter = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .on("contextmenu", (d) => {
      d3.event.preventDefault()
      new Taxmenu(d3.event, that._options(d))
    })
}

ContextHandler.prototype._options = function(d) {
  var that = this

  var options = [
    new Item('Create child', () => {
      d.createChild().then((child) => {
        that.editor.trigger("nodeSelected", child)
        that.editor.trigger("beforeEnter")
      }).catch((e) => {
        that.editor.trigger("error", e)
      })
    })
  ]

  if (d.depth > 0) {
    options.push(new Item('Delete', () => {
      d.delete().then(() => {
        that.editor.trigger("nodeSelected", d.parent)
        that.editor.trigger("beforeEnter")
      }).catch((e) => {
        that.editor.trigger("error", e)
      })
    }))
  }

  return options
}
