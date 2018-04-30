import {MainStage} from './stages/main.js'

export class Taxplay {
  constructor() {
    _.extend(this, Backbone.Events)
    new MainStage(this)

    this.on("dataReceived", (d) => {
      this.data = d
      this.trigger("beforeEnter")
    })
  }

  attach(element) {
    this.element = d3.select(element)
      .classed("taxplay", true)
  }
}
