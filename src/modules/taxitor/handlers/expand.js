Taxitor.Handlers.Expand = function(editor) {
  this.editor = editor
  editor.on("afterEnter", this.afterEnter, this)
}

Taxitor.Handlers.Expand.prototype.afterEnter = function() {
  this.editor.g
    .selectAll(".node")
    .on("click", this.onClick.bind(this))
}

Taxitor.Handlers.Expand.prototype.onClick = function(d) {
  var that = this

  if (d.children) {
    d.children = null
    that.editor.trigger("onEnter")
    return
  }

  d.expand().then(function() {
    that.editor.trigger("onEnter")
  })
}
