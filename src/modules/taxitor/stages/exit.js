export class ExitStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onExit", this.onExit, this)
  }

  onExit() {
    this.editor.g
      .selectAll(".node")
      .data(this.editor.data.descendants(), (d) => d.id)
      .exit()
      .remove()

    this.editor.g
      .selectAll(".link")
      .data(this.editor.data.links(), (d) => d.target.id)
      .exit()
      .remove()
  }
}
