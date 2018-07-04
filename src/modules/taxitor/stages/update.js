import {DefaultSchema} from '../schemas/default.js'

export class UpdateStage {
  constructor(editor) {
    this.editor = editor
    this.schema = new DefaultSchema(this.editor)
    this.editor.on("onUpdate", this.onUpdate, this)
  }

  onUpdate() {
    this.editor.element
      .selectAll(".link")
      .transition()
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)

    this.editor.element
      .selectAll(".node *")
      .remove()

    this.editor.element
      .selectAll(".node")
      .transition()
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .each((d, i, nodes) => this.schema.node(nodes[i], d))
  }
}
