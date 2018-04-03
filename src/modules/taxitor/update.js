Taxitor.Render = function(editor) {
  editor.on("onMove", this.onMove, this)
}

Taxitor.Render.prototype.onMove = function() {
  var that = this

  that.editor.g
    .selectAll(".line")
    .attr("x1", function(d) { return d.source.x })
    .attr("y1", function(d) { return d.source.y })
    .attr("x2", function(d) { return d.target.x })
    .attr("y2", function(d) { return d.target.y })
    .style("stroke", "black")

  that.editor.g
    .selectAll(".node circle")
    .attr("cx", function(d) { return d.x })
    .attr("cy", function(d) { return d.y })
    .attr("r", 50)

  that.editor.g
    .selectAll(".node text")
    .attr("x", function(d) { return d.x })
    .attr("y", function(d) { return d.y })
    .html(function(d) { return d.title })
}
