import {GroupTaxele} from './group.js'
import {ButtonTaxele} from './button.js'

export class RadioTaxele {
  constructor(data, name, items) {
    _.extend(this, Backbone.Events)
    this.on("onSelect", this.onSelect)

    this.data = data
    this.name = name
    this.items = items
  }

  attach(element) {
    this.element = d3.select(element)
      .append("div")
      .classed("taxeles", true)

    this.element
      .append("input")
      .attr("type", "hidden")
      .attr("name", this.name)

    var items = this.items.map((d) => {
      return new ButtonTaxele(d, () => {
        this.trigger("onSelect", d)
      })
    })

    new GroupTaxele(this.name, items)
      .attach(this.element.node())

    this.update()
  }

  update() {
    this.onSelect(this.data.get(this.name))
  }

  onSelect(d = "") {
    var input = this.element.select("input").node()
    if (input.value == d) return

    var event = new Event("change", { "bubbles": true })
    input.dispatchEvent(event)

    input.value = d
    var index = this.items.indexOf(d)

    this.element
      .selectAll("button")
      .classed("selected", (d, i) => i == index)
  }
}
