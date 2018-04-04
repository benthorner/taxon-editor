Taxitor.Stages.Update = function(editor) {
  this.editor = editor
  this.editor.on("onUpdate", this.onUpdate, this)
}

Taxitor.Stages.Update.prototype.onUpdate = function() {
  this.editor.g
    .selectAll(".link")
    .attr("x1", function(d) { return d.source.x })
    .attr("y1", function(d) { return d.source.y })
    .attr("x2", function(d) { return d.target.x })
    .attr("y2", function(d) { return d.target.y })
    .style("stroke", "black")

  this.editor.g
    .selectAll(".node circle")
    .attr("cx", function(d) { return d.x })
    .attr("cy", function(d) { return d.y })
    .attr("r", 50)

  this.editor.g
    .selectAll(".node text")
    .attr("x", function(d) { return d.x })
    .attr("y", function(d) { return d.y })
    .html(function(d) { return d.title })
}
