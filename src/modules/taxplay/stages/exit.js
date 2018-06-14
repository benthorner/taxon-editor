export class ExitStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onExit", this.onExit, this)
  }

  onExit() {
    this.editor.element
      .selectAll("*")
      .remove()
  }
}
