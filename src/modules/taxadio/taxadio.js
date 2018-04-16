export function Taxadio(element, items) {
  this.element = d3.select(element)
  this.items = items
  this.selected = this.items[0].name

  this.element
    .attr("class", "taxadio")
    .selectAll("div")
    .data(_.pluck(this.items, "name"))
    .enter()
    .append("div")
    .classed("item", true)
    .html((d) => d)
    .on("click", this.onClick.bind(this))

  this._update()
}

Taxadio.prototype._update = function() {
  var that = this

  this.element
    .selectAll(".item")
    .classed("selected", (d) => d == that.selected)
}

Taxadio.prototype.onClick = function(d) {
  this.selected = d
  this._update()
  _.findWhere(this.items, {name: d}).callback()
}
