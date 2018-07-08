export class ClearHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onClear", this.onClear, this)
  }

  onClear() {
    this.editor.g
      .selectAll(".node")
      .remove()

    this.editor.g
      .selectAll(".link")
      .remove()
  }
}
