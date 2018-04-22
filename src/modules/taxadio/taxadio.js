export class Taxadio {
  constructor(element, items) {
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
      .attr("tabindex", 0)
      .html((d) => d)
      .on("click", this.onClick.bind(this))
      .on("keydown", (d) => {
        if (d3.event.key == "Enter") this.onClick(d)
      })

    this._update()
  }

  _update() {
    this.element
      .selectAll(".item")
      .classed("selected", (d) => d == this.selected)
  }

  onClick(d) {
    this.selected = d
    this._update()
    _.findWhere(this.items, {name: d}).callback()
  }
}
