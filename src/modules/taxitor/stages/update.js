export function UpdateStage(editor) {
  this.editor = editor
  this.editor.on("onUpdate", this.onUpdate, this)
}

UpdateStage.prototype.onUpdate = function() {
  var that = this

  this.editor.g
    .selectAll(".link")
    .transition()
    .attr("x1", function(d) { return d.source.x })
    .attr("y1", function(d) { return d.source.y })
    .attr("x2", function(d) { return d.target.x })
    .attr("y2", function(d) { return d.target.y })

  this.editor.g
    .selectAll(".node rect")
    .transition()
    .attr("x", function(d) { return d.x })
    .attr("y", function(d) { return d.y })
    .attr("width", function(d) { return d.width })
    .attr("height", function(d) { return d.height })

  this.editor.g
    .selectAll(".node foreignObject")
    .transition()
    .attr("x", function(d) { return d.x })
    .attr("y", function(d) { return d.y })
    .attr("width", function(d) { return d.width })
    .attr("height", function(d) { return d.height })

  this.editor.g
    .selectAll(".node foreignObject .title")
    .html(function(d) { return d.title })
}
