import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

const options = {
  ForceLayout: { simulationTicks: 1000, collisionRadius: 100 },
  ZoomHandler: { maxScaleFactor: 2, transformDelay: 500 },
  TreeLayout: { xSeparation: 110, ySeparation: 200 },
  RadialLayout: { xSeparation: 110, ySeparation: 110 }
}

export class Taxitor {
  constructor() {
    _.extend(this, Backbone.Events)
    this.options = options

    new MainStage(this)
    new MainHandler(this)

    this.on("dataReceived", function(data) {
      this.data = data
      this.trigger("beforeEnter")
    })
  }

  attach(element) {
    this.element = d3.select(element)

    this.g = d3
      .select(element)
      .classed("taxitor", true)
      .append("g")

    this.trigger("attach")
  }
}

