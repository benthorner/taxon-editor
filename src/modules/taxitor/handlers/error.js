export class ErrorHandler {
  constructor(editor) {
    editor.on("error", this.error, this)
  }

  error(d) {
    console.log(d)
  }
}
