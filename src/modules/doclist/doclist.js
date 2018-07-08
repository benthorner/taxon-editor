import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export class Doclist {
  constructor() {
    _.extend(this, Backbone.Events)

    new MainStage(this)
    new MainHandler(this)

    this.on("dataReceived", (d) => {
      d.then((d2) => {
        this.data = d2
        this.trigger("beforeExit")
      }).catch((e) => {
        this.trigger("error", e)
      })
    })
  }

  attach(element) {
    this.element = d3.select(element)
      .classed("doclist", true)
  }
}
