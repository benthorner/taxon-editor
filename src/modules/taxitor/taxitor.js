import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

const options = {
  ForceLayout: { simulationTicks: 1000, collisionRadius: 100 },
  ZoomHandler: { maxScaleFactor: 2, transformDelay: 500 }
}

export class Taxitor {
  constructor(element) {
    _.extend(this, Backbone.Events)
    this.element = element
    this.options = options

    this.g = d3
      .select(element)
      .classed("taxitor", true)
      .append("g")

    new MainStage(this)
    new MainHandler(this)

    this.on("dataReceived", function(data) {
      this.data = data
      this.trigger("beforeEnter")
    })
  }
}

