export class ExpandHandler {
  constructor(editor) {
    this.editor = editor
    editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.editor.g
      .selectAll(".node")
      .on("dblclick", this.onClick.bind(this))
  }

  onClick(d) {
    d3.event.stopPropagation()
    var promise = d.children ?  d.contract() : d.expand()

    promise
      .then(() => this.editor.trigger("beforeEnter"))
      .catch((e) => this.editor.trigger("error", e))
  }
}
