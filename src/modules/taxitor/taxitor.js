import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export class Taxitor {
  constructor() {
    _.extend(this, Backbone.Events)

    new MainStage(this)
    new MainHandler(this)

    this.on("onData", (d) => {
      d.then((d2) => {
        this.data = d2
        this.trigger("beforeExit")
        this.trigger("onSelect", d2)
      }).catch((e) => {
        this.trigger("error", e)
      })
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

