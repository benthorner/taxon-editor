import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export function Taxitor(element) {
  _.extend(this, Backbone.Events)
  this.element = element
  this.options = Taxitor.OPTIONS

  this.g = d3
    .select(element)
    .append("svg")
    .append("g")
    .classed("taxitor", true)

  new MainStage(this)
  new MainHandler(this)

  this.on("dataReceived", function(data) {
    this.data = data
    this.trigger("beforeEnter")
  })
}

Taxitor.OPTIONS = {
  ForceLayout: { simulationTicks: 1000, collisionRadius: 100 },
  ZoomHandler: { maxScaleFactor: 2, transformDelay: 500 }
}
