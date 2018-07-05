import {WrapLayout} from '../layouts/wrap.js'

export class LayoutStage {
  constructor(editor) {
    this.editor = editor
    this.layout = new WrapLayout(this.editor)

    this.editor.on("layoutSelected", this.layoutSelected, this)
    this.editor.on("onLayout", this.onLayout, this)
    this.editor.on("onAttach", this.onAttach, this)
  }

  onAttach() {
    window.onresize = () => this.editor.trigger("beforeLayout")
  }

  onLayout() {
    this.layout.call(this.editor.data)
  }

  layoutSelected(d) {
    this.layout = d
  }
}
