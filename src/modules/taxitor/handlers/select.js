export class SelectHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("afterEnter", this.afterEnter, this)
    this.editor.on("nodeSelected", this.nodeSelected, this)
  }

  afterEnter() {
    this.editor.g
      .selectAll(".node")
      .on("click", (d) => {
        this.editor.trigger("nodeSelected", d)
      })
  }

  nodeSelected(d) {
    this.editor.g
      .selectAll(".node")
      .classed("selected", (d2) => d2 == d)
  }
}
