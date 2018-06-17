export class GroupTaxele {
  constructor(name, items) {
    this.name = name
    this.items = items
  }

  attach(element) {
    this.element = d3.select(element)
      .append("div")
      .attr("id", this.name)
      .classed("taxeles", true)

    this.items.map((d) => {
      d.attach(this.element.node())
    })
  }
}
