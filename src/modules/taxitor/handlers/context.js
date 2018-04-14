import {Option} from '../../taxmenu/option.js'
import {Taxmenu} from '../../taxmenu/taxmenu.js'

export function ContextHandler(editor) {
  this.editor = editor
  this.editor.on("afterEnter", this.afterEnter, this)
}

ContextHandler.prototype.afterEnter = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .on("contextmenu", function(d) {
      d3.event.preventDefault()
      new Taxmenu(d3.event, that._options(d))
    })
}

ContextHandler.prototype._options = function(d) {
  var that = this

  return [
    new Option('Create child', function() {
      d.createChild().then(function(child) {
        that.editor.trigger("nodeSelected", child)
        that.editor.trigger("beforeEnter")
      })
    }),
    new Option('Delete', function() {
      if (d.depth == 0) return
      d.delete().then(function() {
        that.editor.trigger("nodeSelected", d.parent)
        that.editor.trigger("beforeEnter")
      })
    })
  ]
}