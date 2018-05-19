export class UpdateStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onUpdate", this.onUpdate, this)
  }

  onUpdate() {
    this.editor.g
      .selectAll(".link")
      .transition()
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y)

    this.editor.g
      .selectAll(".node")
      .transition()
      .attr("transform", (d) => `translate(${d.x},${d.y})`)

    this.editor.g
      .selectAll(".node foreignObject .title")
      .html((d) => d.node.get("title"))
  }
}
