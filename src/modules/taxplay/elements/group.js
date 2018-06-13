export class GroupElement {
  constructor(name, items) {
    this.name = name
    this.items = items
  }

  attach(element) {
    this.element = d3.select(element)
      .classed(this.name, true)

    this.items.map((d) => {
      d.attach(this.element.node())
    })
  }

  update() { }
}
