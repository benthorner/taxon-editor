Taxitor.Handlers.Expand = function(editor) {
  this.editor = editor
  editor.on("afterEnter", this.afterEnter, this)
}

Taxitor.Handlers.Expand.prototype.afterEnter = function() {
  var that = this

  that.editor.g
    .selectAll(".node")
    .on("click", function(d) {
      if (d.children) d.children = null
      else d.expand()
      that.editor.trigger("onEnter")
    })
}
