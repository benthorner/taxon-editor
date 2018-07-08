import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export class Taxplay {
  constructor() {
    _.extend(this, Backbone.Events)

    new MainStage(this)
    new MainHandler(this)

    this.on("onData", (d) => {
      this.data = d
      this.trigger("beforeUpdate")
    })
  }

  attach(element) {
    this.element = d3.select(element)
      .classed("taxplay", true)

    this.trigger("onAttach")
  }
}
