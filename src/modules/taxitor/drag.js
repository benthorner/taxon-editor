Taxitor.Drag = function(events, element) {
  this.tree = element
  this.events = events
  events.on("data", this.data, this)
}

Taxitor.Drag.prototype.data = function() {
  var that = this

  that.tree.selectAll(".node")
    .style("cursor", "hand")
    .call(d3.drag().on("drag", function (d) {
      d.x = d3.event.x
      d.y = d3.event.y
      that.events.trigger("draw")
    }))
}
