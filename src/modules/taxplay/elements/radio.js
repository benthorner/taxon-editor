import {GroupElement} from './group.js'
import {ButtonElement} from './button.js'

export class RadioElement {
  constructor(data, name, items) {
    _.extend(this, Backbone.Events)
    this.data = data
    this.name = name
    this.items = items
  }

  attach(element) {
    this.element = d3.select(element)

    var items = this.items.map((d) => {
      return new ButtonElement(d, () => this.onSelect(d))
    })

    new GroupElement(this.name, items)
      .attach(element)

    this.element
      .append("input")
      .attr("type", "hidden")
      .attr("name", this.name)

    this.update()
  }

  update() {
    this.onSelect(this.data.get(this.name))
  }

  onSelect(d = "") {
    var input = this.element.select("input").node()
    if (input.value == d) return

    input.value = d
    this.trigger("change", d)

    var event = new Event("change", { "bubbles": true })
    input.dispatchEvent(event)

    var index = this.items.indexOf(d)

    this.element
      .selectAll("button")
      .classed("selected", (d, i) => i == index)
  }
}
