export class TextBoxTaxele {
  constructor(data, name) {
    this.data = data
    this.name = name
  }

  attach(element) {
    this.element = d3.select(element)
      .append("input")
      .attr("id", this.name)
      .attr("name", this.name)
      .classed("taxeles", true)

    var value = this.data.get(this.name)
    this.element.node().value = value
  }
}
