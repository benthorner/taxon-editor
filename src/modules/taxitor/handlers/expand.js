export class ExpandHandler {
  constructor(editor) {
    this.editor = editor
    editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.editor.element
      .selectAll(".node")
      .on("dblclick", this.onClick.bind(this))
      .on("keydown", (d) => {
        if (d3.event.key == "Enter") this.onClick(d)
      })
  }

  onClick(d) {
    d3.event.stopPropagation()

    if (d.children) {
      d.link.reset()
      this.editor.trigger("beforeExit")
      return
    }

    d.link.fetch()
      .then(() => this.editor.trigger("beforeEnter"))
      .catch((e) => this.editor.trigger("error", e))
  }
}
