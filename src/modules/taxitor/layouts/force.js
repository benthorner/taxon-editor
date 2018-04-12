import {BaseLayout} from './base.js'

export function ForceLayout(editor) {
  _.extend(this, new BaseLayout(editor))
  this.simulationTicks = 1000
}

ForceLayout.prototype.apply = function(root) {
  var that = this

  var sim = d3.forceSimulation(root.descendants())
    .force("collision", d3.forceCollide(this.nodeWidth))
    .force("link", d3.forceLink(root.links()))
    .force("x", d3.forceY())

  for (var i=0; i < this.simulationTicks; i++) sim.tick()

  root.descendants().forEach(function(d) {
    d.width = that.nodeWidth; d.height = that.nodeHeight
  })
}
