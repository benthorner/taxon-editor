export class ExitStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onExit", this.onExit, this)
  }

  onExit() {
    this.editor.element
      .selectAll(".node")
      .data([this.editor.data], (d) => d.id)
      .exit()
      .remove()
  }
}
