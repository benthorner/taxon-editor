export class TextBoxElement {
  constructor(data, name) {
    this.data = data
    this.name = name
  }

  attach(element) {
    this.element = d3.select(element)
      .classed(this.name, true)
      .append("input")
      .attr("name", this.name)
  }

  update() {
    var value = this.data.get(this.name)
    this.element.node().value = value
  }
}
