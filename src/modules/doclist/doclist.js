import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export class Doclist {
  constructor() {
    _.extend(this, Backbone.Events)

    new MainStage(this)
    new MainHandler(this)

    this.on("dataReceived", function(data) {
      this.data = data
      this.trigger("beforeExit")
    })
  }

  attach(element) {
    this.element = d3.select(element)
      .classed("doclist", true)
  }
}
