export class EditHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onAttach", this.onAttach, this)
    this.editor.on("onReset", this.onReset, this)
    this.editor.on("onSave", this.onSave, this)
  }

  onAttach() {
    this.editor.element.on("change", () => {
      this.editor.element.classed("dirty", true)
    })
  }

  onReset() {
    this.editor.trigger("beforeUpdate")
    this.editor.element.classed("dirty", false)
  }

  onSave(d) {
    var node = this.editor.data.node
    var data = new FormData(this.editor.element.node())

    for (var entry of data.entries()) {
      node.set(entry[0], entry[1])
    }

    this.editor.element.classed("dirty", false)
    this.editor.trigger("beforeUpdate")
  }
}
