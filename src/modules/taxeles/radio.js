import {GroupTaxele} from './group.js'
import {ButtonTaxele} from './button.js'

export class RadioTaxele {
  constructor(name, items, data) {
    _.extend(this, Backbone.Events)
    this.on("onSelect", this.onSelect)
    this.on("onUpdate", this.onUpdate)

    this.name = name
    this.items = items
    this.data = data
  }

  attach(element) {
    this.element = d3.select(element)
      .append("div")
      .classed("taxeles", true)

    var items = this.items.map((d) => {
      return new ButtonTaxele(d, () => {
        this.trigger("onSelect", d)
      })
    })

    new GroupTaxele(this.name, items)
      .attach(this.element.node())

    var value = this.data.get(this.name)
    this.trigger("onUpdate", value)
  }

  onSelect(d = "") {
    var event = new Event("change", { "bubbles": true })
    this.element.node().dispatchEvent(event)

    this.data.set(this.name, d)
    this.trigger("onUpdate", d)
  }

  onUpdate(d) {
    var index = this.items.indexOf(d)

    this.element
      .selectAll("button")
      .classed("selected", (d, i) => i == index)
  }
}
