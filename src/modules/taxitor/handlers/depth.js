export function DepthHandler(editor) {
  this.editor = editor
  this.maxDepth = 9
  this.editor.on("onUpdate", this.onUpdate, this)
}

DepthHandler.prototype.onUpdate = function() {
  for (var i=0; i<=this.maxDepth; i++) {
    this.editor.g
      .selectAll(".node")
      .classed("depth"+i, function(d) { return d.depth == i })
  }
}
