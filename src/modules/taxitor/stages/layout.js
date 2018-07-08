import {WrapLayout} from '../layouts/wrap.js'

export class LayoutStage {
  constructor(editor) {
    this.editor = editor
    this.layout = new WrapLayout(this.editor)

    this.editor.on("onSelectLayout", this.onSelectLayout, this)
    this.editor.on("onLayout", this.onLayout, this)
    this.editor.on("onAttach", this.onAttach, this)
  }

  onAttach() {
    window.onresize = () => this.editor.trigger("beforeLayout")
  }

  onLayout() {
    if (this.editor.data == undefined) return
    this.layout.call(this.editor.data)
  }

  onSelectLayout(d) {
    this.layout = d
  }
}
