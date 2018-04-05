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
    .selectAll(".node rect")
    .attr("x", function(d) { return d.x - 25 })
    .attr("y", function(d) { return d.y - 25 })
    .attr("width", 50)
    .attr("height", 50)

  this.editor.g
    .selectAll(".node foreignObject")
    .attr("x", function(d) { return d.x - 25 })
    .attr("y", function(d) { return d.y - 25 })
    .attr("width", 50)
    .attr("height", 50)
    .select(".title")
    .html(function(d) { return d.title })
}
