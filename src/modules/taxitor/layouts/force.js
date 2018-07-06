import {Config} from '../../../config.js'

export class ForceLayout {
  call(root) {
    var collisionRadius = Config.get("Taxitor.ForceLayout.collisionRadius")
    var simulationTicks = Config.get("Taxitor.ForceLayout.simulationTicks")

    var sim = d3.forceSimulation(root.tree.nodes())
      .force("collision", d3.forceCollide(collisionRadius))
      .force("link", d3.forceLink(root.tree.links()))
      .force("x", d3.forceY())

    for (var i=0; i < simulationTicks; i++) sim.tick()
  }
}
