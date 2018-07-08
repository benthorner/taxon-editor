export class SelectHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.editor.element
      .selectAll(".node")
      .attr("tabindex", 0)
      .on("click", (d) => {
        this.editor.trigger("onSelect", d)
      })
      .on("focus", (d) => {
        this.editor.trigger("onSelect", d)
      })
  }
}
