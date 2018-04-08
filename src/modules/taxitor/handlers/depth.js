Taxitor.Handlers.Depth = function(editor) {
  this.editor = editor
  this.editor.on("onUpdate", this.onUpdate, this)
}

Taxitor.Handlers.Depth.prototype.onUpdate = function() {
  for (var i=0; i<=this.editor.data.height; i++) {
    this.editor.g
      .selectAll(".node")
      .classed("depth"+i, function(d) { return d.depth == i })
  }
}
