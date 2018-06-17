export class LabelTaxele {
  constructor(data, name) {
    this.data = data
    this.name = name
  }

  attach(element) {
    this.element = d3.select(element)
      .append("label")
      .attr("id", this.name)
      .classed("taxeles", true)
      .html(this.data.get(this.name))
  }
}
