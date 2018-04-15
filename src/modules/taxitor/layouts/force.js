import {BaseLayout} from './base.js'

export function ForceLayout(editor) {
  _.extend(this, new BaseLayout(editor))
  this.simulationTicks = 1000
  this.collisionRadius = 100
}

ForceLayout.prototype.call = function(root) {
  var sim = d3.forceSimulation(root.descendants())
    .force("collision", d3.forceCollide(this.collisionRadius))
    .force("link", d3.forceLink(root.links()))
    .force("x", d3.forceY())

  for (var i=0; i < this.simulationTicks; i++) sim.tick()
}
