export class ClearHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onClear", this.onClear, this)
  }

  onClear() {
    this.editor.data = null
    this.editor.trigger("beforeExit")
  }
}
