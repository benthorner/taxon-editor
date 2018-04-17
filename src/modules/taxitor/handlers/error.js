export class ErrorHandler {
  constructor(editor) {
    editor.on("error", this.error, this)
  }

  error(d) {
    alert(d)
  }
}
