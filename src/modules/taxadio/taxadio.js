export function Taxadio(element, options) {
  this.element = d3.select(element)
  this.options = options
  this.selected = this.options[0].name

  this.element
    .attr("class", "taxadio")
    .selectAll("div")
    .data(_.pluck(this.options, "name"))
    .enter()
    .append("div")
    .classed("button", true)
    .html(function(d) { return d })
    .on("click", this.onClick.bind(this))

  this._update()
}

Taxadio.prototype._update = function() {
  var that = this

  this.element
    .selectAll(".button")
    .classed("selected", function(d) {
      return d == that.selected
    })
}

Taxadio.prototype.onClick = function(d) {
  this.selected = d
  this._update()
  _.findWhere(this.options, {name: d}).callback()
}
