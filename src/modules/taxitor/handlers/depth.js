Taxitor.Handlers.Depth = function(editor) {
  this.editor = editor
  this.maxDepth = 9
  this.editor.on("onUpdate", this.onUpdate, this)
}

Taxitor.Handlers.Depth.prototype.onUpdate = function() {
  for (var i=0; i<=this.maxDepth; i++) {
    this.editor.g
      .selectAll(".node")
      .classed("depth"+i, function(d) { return d.depth == i })
  }
}
