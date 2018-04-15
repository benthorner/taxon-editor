import {ForceLayout} from '../layouts/force.js'

export function LayoutStage(editor) {
  this.editor = editor

  this.editor.on("layoutSelected", this.layoutSelected, this)
  this.layout = new ForceLayout(this.editor)

  this.editor.on("onLayout", this.onLayout, this)
  $(window).resize(() => editor.trigger("beforeLayout"))
}

LayoutStage.prototype.onLayout = function() {
  this.layout.call(this.editor.data)
}

LayoutStage.prototype.layoutSelected = function(d) {
  this.layout = d
  this.editor.trigger("beforeLayout")
}
