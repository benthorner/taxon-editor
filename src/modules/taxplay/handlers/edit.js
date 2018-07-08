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
    this.editor.data.node.reset()
    this.editor.trigger("beforeUpdate")
    this.editor.element.classed("dirty", false)
  }

  onSave(d) {
    this.editor.data.node.save()
    this.editor.trigger("beforeUpdate")
    this.editor.element.classed("dirty", false)
  }
}
