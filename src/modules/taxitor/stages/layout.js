import {WrapLayout} from '../layouts/wrap.js'

export class LayoutStage {
  constructor(editor) {
    this.editor = editor

    this.editor.on("layoutSelected", this.layoutSelected, this)
    this.layout = new WrapLayout(this.editor)

    this.editor.on("onLayout", this.onLayout, this)
    $(window).resize(() => editor.trigger("beforeLayout"))
  }

  onLayout() {
    this.layout.call(this.editor.data)
  }

  layoutSelected(d) {
    this.layout = d
  }
}
