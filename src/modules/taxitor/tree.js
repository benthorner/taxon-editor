Taxitor.Tree = function(events, element) {
  this.radius = 50
  this.margin = 10
  this.element = element
  this.tree = element.append("svg").append("g")

  events.on("data", this.data, this)
  events.on("draw", this.draw, this)
}

Taxitor.Tree.prototype.data = function(data) {
  var that = this
  that.root = d3.hierarchy(data)

  that.tree.selectAll(".line")
    .data(that.root.links())
    .enter()
    .append("line")
    .attr("class", "line")

  that.tree.selectAll(".node")
    .data(that.root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")

  that.tree.selectAll(".node").append("circle")
  that.tree.selectAll(".node").append("text")
}

Taxitor.Tree.prototype.draw = function() {
  var that = this

  that.element
    .select("svg")
    .attr("width", that.element.node().clientWidth)
    .attr("height", that.element.node().clientHeight)

  d3.tree().size(this._size())(that.root)

  that.tree.selectAll(".line")
    .attr("x1", function(d) { return that._offset(d.source.x) })
    .attr("y1", function(d) { return that._offset(d.source.y) })
    .attr("x2", function(d) { return that._offset(d.target.x) })
    .attr("y2", function(d) { return that._offset(d.target.y) })
    .style("stroke", "black")

  that.tree.selectAll(".node circle")
    .attr("cx", function(d) { return that._offset(d.x) })
    .attr("cy", function(d) { return that._offset(d.y) })
    .attr("fill", "red")
    .attr("r", that.radius)

  that.tree.selectAll(".node text")
    .attr("x", function(d) { return that._offset(d.x) })
    .attr("y", function(d) { return that._offset(d.y) })
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "central")
    .style("font-family", "courier")
    .html(function(d) { return d.data.name })
}

Taxitor.Tree.prototype._offset = function(value) {
  return value + this.radius + this.margin
}

Taxitor.Tree.prototype._size = function() {
  var width = this.element.node().clientWidth - 2*this._offset(0)
  var height = this.element.node().clientHeight - 2*this._offset(0)
  return [width, height]
}
