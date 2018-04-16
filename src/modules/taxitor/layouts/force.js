import {BaseLayout} from './base.js'

export function ForceLayout(editor) {
  this.options = editor.options[this.constructor.name]
}

ForceLayout.prototype.call = function(root) {
  var collisionRadius = this.options.collisionRadius
  var simulationTicks = this.options.simulationTicks

  var sim = d3.forceSimulation(root.descendants())
    .force("collision", d3.forceCollide(collisionRadius))
    .force("link", d3.forceLink(root.links()))
    .force("x", d3.forceY())

  for (var i=0; i < simulationTicks; i++) sim.tick()
}
