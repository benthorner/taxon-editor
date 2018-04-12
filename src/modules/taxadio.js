export function Taxadio(element, options) {
  _.extend(this, Backbone.Events)
  this.element = d3.select(element)
  this.options = options
  this.selected = this.options[0]
  this.on("click", this.update, this)

  this.element
    .attr("class", "taxadio")
    .selectAll("div")
    .data(this.options)
    .enter()
    .append("div")
    .classed("button", true)
    .html(function(d) { return d })
    .on("click", this.onClick.bind(this))

  this.update()
}

Taxadio.prototype.update = function() {
  var that = this

  this.element
    .selectAll(".button")
    .classed("selected", function(d) {
      return d == that.selected
    })
}

Taxadio.prototype.onClick = function(d) {
  this.selected = d
  this.trigger("click", d)
}
