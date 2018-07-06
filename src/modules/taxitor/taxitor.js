import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export class Taxitor {
  constructor() {
    _.extend(this, Backbone.Events)

    new MainStage(this)
    new MainHandler(this)

    this.on("dataReceived", (d) => {
      this.data = d
      this.trigger("beforeExit")
      this.trigger("nodeSelected", d)
    })
  }

  attach(element) {
    this.container = d3.select(element)

    this.element = this.container
      .classed("taxitor", true)
      .append("g")

    this.trigger("onAttach")
  }
}

