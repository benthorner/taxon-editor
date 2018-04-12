import {MainStage} from './stages/main.js'
import {MainHandler} from './handlers/main.js'

export function Taxitor(element) {
  _.extend(this, Backbone.Events)
  this.element = element

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
