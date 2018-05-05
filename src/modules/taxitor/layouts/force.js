export class ForceLayout {
  constructor(editor) {
    this.options = editor.options[this.constructor.name]
  }

  call(root) {
    var collisionRadius = this.options.collisionRadius
    var simulationTicks = this.options.simulationTicks

    var sim = d3.forceSimulation(root.tree.nodes())
      .force("collision", d3.forceCollide(collisionRadius))
      .force("link", d3.forceLink(root.tree.links()))
      .force("x", d3.forceY())

    for (var i=0; i < simulationTicks; i++) sim.tick()
  }
}
