export class Taxmenu {
  constructor(event, items) {
    this.items = items
  }

  attach(element) {
    d3.select(element)
      .append("div")
      .attr("id", "taxmenu")
      .on("contextmenu", () => d3.event.preventDefault())
      .append("div")
      .attr("id", "container")
      .style("top", event.pageY)
      .style("left", event.pageX)
      .selectAll("div")
      .data(_.pluck(this.items, "name"))
      .enter()
      .append("div")
      .classed("item", true)
      .html((d) => d)
      .on("click", this.onClick.bind(this))

    d3.select("#taxmenu").on("click", this._remove)
  }

  _remove() {
     d3.select("#taxmenu").remove()
  }

  onClick(d) {
    this._remove()
    _.findWhere(this.items, {name: d}).callback()
  }
}
