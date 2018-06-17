export class ExitStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onExit", this.onExit, this)
  }

  onExit() {
    var tree = this.editor.data.tree

    this.editor.element
      .selectAll(".node")
      .data(tree.nodes(), (d) => d.id)
      .exit()
      .remove()

    this.editor.element
      .selectAll(".link")
      .data(tree.links(), (d) => d.target.id)
      .exit()
      .remove()
  }
}
