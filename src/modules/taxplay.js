export class Taxplay {
  constructor() {
    _.extend(this, Backbone.Events)
    this.on("dataReceived", this.dataReceived, this)
  }

  attach(element) {
    this.element = d3.select(element)
    this.element.classed("taxplay", true)
    this.element.append("div").classed("title", true)
    this.element.append("div").classed("base-path", true)
    this.element.append("div").classed("id", true)
    this.element.append("div").classed("description", true)
  }

  dataReceived(d) {
    this.element.select(".title").html(d.title)
    this.element.select(".base-path").html(d.base_path)
    this.element.select(".id").html(d.id)
    this.element.select(".description").html(d.description)
  }
}
