export class LabelTaxele {
  constructor(name, data) {
    this.name = name
    this.data = data
  }

  attach(element) {
    this.element = d3.select(element)
      .append("label")
      .attr("id", this.name)
      .classed("taxeles", true)
      .html(this.data.get(this.name))
  }
}
