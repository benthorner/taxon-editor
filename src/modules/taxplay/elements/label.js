export class LabelElement {
  constructor(data, name) {
    this.data = data.node
    this.name = name
  }

  attach(element) {
    this.element = d3.select(element)
      .classed(this.name, true)
  }

  update() {
    var value = this.data.get(this.name)
    this.element.html(value)
  }
}
