export class ExpandHandler {
  constructor(editor) {
    this.editor = editor
    editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.editor.g
      .selectAll(".node")
      .on("dblclick", this.onClick.bind(this))
      .on("keydown", (d) => {
        if (d3.event.key == "Enter") this.onClick(d)
      })
  }

  onClick(d) {
    d3.event.stopPropagation()

    var promise = d.children && d.children.length ?
      d.link.reset() : d.link.fetch()

    promise
      .then(() => this.editor.trigger("beforeEnter"))
      .catch((e) => this.editor.trigger("error", e))
  }
}
