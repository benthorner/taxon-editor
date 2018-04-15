export function UpdateStage(editor) {
  this.editor = editor
  this.editor.on("onUpdate", this.onUpdate, this)
}

UpdateStage.prototype.onUpdate = function() {
  var that = this

  this.editor.g
    .selectAll(".link")
    .transition()
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y)

  this.editor.g
    .selectAll(".node rect")
    .transition()
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)

  this.editor.g
    .selectAll(".node foreignObject")
    .transition()
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y)

  this.editor.g
    .selectAll(".node foreignObject .title")
    .html((d) => d.title)
}
