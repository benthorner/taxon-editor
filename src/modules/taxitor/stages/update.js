import {DefaultSchema} from '../schemas/default.js'
import {Config} from '../../../config.js'

export class UpdateStage {
  constructor(editor) {
    this.editor = editor
    this.schema = new DefaultSchema(this.editor)
    this.editor.on("onUpdate", this.onUpdate, this)
  }

  onUpdate() {
    var duration = Config.get("Taxitor.UpdateStage.duration")

    this.editor.element
      .selectAll(".link")
      .transition()
      .duration(duration)
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
      .duration(duration)
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .each((d, i, nodes) => this.schema.node(nodes[i], d))
  }
}
