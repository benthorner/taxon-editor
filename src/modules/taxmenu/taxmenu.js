export function Taxmenu(event, options) {
  this.options = options

  d3.select("body")
    .append("div")
    .attr("id", "taxmenu")
    .append("div")
    .classed("container", true)
    .style("top", event.pageY)
    .style("left", event.pageX)
    .selectAll("div")
    .data(_.pluck(options, "name"))
    .enter()
    .append("div")
    .classed("button", true)
    .html((d) => d)
    .on("click", this.onClick.bind(this))

  d3.select("#taxmenu").on("click", this._remove)
}

Taxmenu.prototype._remove = function() {
   d3.select("#taxmenu").remove()
}

Taxmenu.prototype.onClick = function(d) {
  this._remove()
  _.findWhere(this.options, {name: d}).callback()
}
