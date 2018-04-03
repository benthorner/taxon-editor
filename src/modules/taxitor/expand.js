Taxitor.Expand = function(editor) {
  this.editor = editor
  editor.on("afterBind", this.afterBind, this)
}

Taxitor.Expand.prototype.afterBind = function() {
  var that = this

  that.editor.g
    .selectAll(".node")
    .on("click", function(d) {
      if (d.children) d.children = null
      else d.expand()
      that.editor.trigger("onBind")
    })
}
