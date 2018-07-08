export class ExitStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onExit", this.onExit, this)
  }

  onExit() {
    var nodes = this.editor.data ?
      this.editor.data.tree.nodes() : []

    var links = this.editor.data ?
      this.editor.data.tree.links() : []

    this.editor.element
      .selectAll(".node")
      .data(nodes, (d) => d.id)
      .exit()
      .remove()

    this.editor.element
      .selectAll(".link")
      .data(links, (d) => d.target.id)
      .exit()
      .remove()
  }
}
