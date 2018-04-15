import {ForceLayout} from '../layouts/force.js'

export function LayoutStage(editor) {
  this.editor = editor
  this.editor.on("onLayout", this.onLayout, this)
  this.editor.on("layoutSelected", this.layoutSelected, this)
  this.layout = new ForceLayout(this.editor)

  $(window)
    .resize(function() { editor.trigger("onLayout") })
}

LayoutStage.prototype.onLayout = function() {
  d3.select(this.editor.element)
    .select("svg")
    .attr("width", this.editor.element.clientWidth)
    .attr("height", this.editor.element.clientHeight)

  this.layout.apply(this.editor.data)
}

LayoutStage.prototype.layoutSelected = function(d) {
  this.layout = d
  this.editor.trigger("beforeLayout")
}
