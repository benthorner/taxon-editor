export class UpdateStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onUpdate", this.onUpdate, this)
  }

  onUpdate() {
    this.editor.element
      .selectAll(".element")
      .each((d) => d.update())
  }
}
