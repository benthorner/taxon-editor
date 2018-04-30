export class LabelElement {
  constructor(data, name) {
    this.data = data
    this.name = name
  }

  attach(element) {
    this.element = d3.select(element)
      .classed(this.name, true)
  }

  update() {
    this.element.html(this.data[this.name])
  }
}
