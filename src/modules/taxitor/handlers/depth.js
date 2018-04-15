export function DepthHandler(editor) {
  this.editor = editor
  this.maxDepth = 0
  this.editor.on("onUpdate", this.onUpdate, this)
}

DepthHandler.prototype.onUpdate = function() {
  var depths = _.pluck(this.editor.data.descendants(), 'depth')
  this.maxDepth = _.max(depths + [this.maxDepth])

  for (var i=0; i<=this.maxDepth; i++) {
    this.editor.g
      .selectAll(".node")
      .classed("depth"+i, function(d) { return d.depth == i })
  }
}
