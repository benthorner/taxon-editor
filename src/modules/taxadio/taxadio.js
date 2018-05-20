export class Taxadio {
  constructor(items) {
    this.items = items
    this.selected = this.items[0].name
  }

  attach(element) {
    this.element = d3.select(element)

    this.element
      .attr("class", "taxadio")
      .selectAll(".taxtton")
      .data(_.pluck(this.items, "name"))
      .enter()
      .append("button")
      .classed("taxtton", true)
      .html((d) => d)
      .on("click", this.onClick.bind(this))

    this._update()
  }

  _update() {
    this.element
      .selectAll(".taxtton")
      .classed("selected", (d) => d == this.selected)
  }

  onClick(d) {
    this.selected = d
    this._update()
    _.findWhere(this.items, {name: d}).callback()
  }
}
