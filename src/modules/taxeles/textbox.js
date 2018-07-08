export class TextBoxTaxele {
  constructor(name, data) {
    this.name = name
    this.data = data
  }

  attach(element) {
    this.element = d3.select(element)
      .append("input")
      .attr("id", this.name)
      .attr("name", this.name)
      .classed("taxeles", true)

    this.element.on("change", () => {
      var value = this.element.node().value
      this.data.set(this.name, value)
    })

    var value = this.data.get(this.name)
    this.element.node().value = value
  }
}
