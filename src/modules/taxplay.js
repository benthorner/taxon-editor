export function Taxplay(element) {
  _.extend(this, Backbone.Events)
  this.element = d3.select(element)
  this.on("dataReceived", this.dataReceived, this)

  this.element.classed("taxplay", true)
  this.element.append("div").classed("title", true)
  this.element.append("div").classed("base-path", true)
  this.element.append("div").classed("id", true)
  this.element.append("div").classed("description", true)
}

Taxplay.prototype.dataReceived = function(d) {
  this.element.select(".title").html(d.title)
  this.element.select(".base-path").html(d.base_path)
  this.element.select(".id").html(d.id)
  this.element.select(".description").html(d.description)
}
