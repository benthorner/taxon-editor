Taxitor.Hide = function(events, element) {
  this.tree = element
  this.events = events

  events.on("data", this.data, this)
  events.on("draw", this.draw, this)
}

Taxitor.Hide.prototype.data = function() {
  var that = this

  that.tree.selectAll(".node")
    .on("click", function(d) {
      d.each(function(d2) {
        if (d2 == d) return
        d2.data.collapsed = !d2.data.collapsed
      })

      that.events.trigger("draw")
    })
}

Taxitor.Hide.prototype.draw = function() {
  var that = this

  that.tree.selectAll(".node")
    .style("visibility", that._collapseNode)

  that.tree.selectAll(".line")
    .style("visibility", that._collapseLink)
}

Taxitor.Hide.prototype._collapseNode = function(d) {
  return d.data.collapsed ? "hidden" : "visible"
}

Taxitor.Hide.prototype._collapseLink = function(d) {
  var collapsed = d.source.data.collapsed
  collapsed |= d.target.data.collapsed
  return collapsed ? "hidden" : "visible"
}
