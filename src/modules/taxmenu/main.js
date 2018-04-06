Taxmenu = function(event, options) {
  _.extend(this, Backbone.Events)

  d3.select("body")
    .append("div")
    .attr("id", "taxmenu")
    .append("div")
    .classed("container", true)
    .style("top", event.pageY)
    .style("left", event.pageX)
    .selectAll("div")
    .data(options)
    .enter()
    .append("div")
    .classed("button", true)
    .html(function(d) { return d })
    .on("click", this.onClick.bind(this))

  d3.select("#taxmenu")
    .on("click", this._remove)
}

Taxmenu.prototype._remove = function() {
   d3.select("#taxmenu").remove()
}

Taxmenu.prototype.onClick = function(d) {
  this.trigger("click", d)
  this._remove()
}
