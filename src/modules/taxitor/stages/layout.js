import {ForceLayout} from '../layouts/force.js'
import {RadialLayout} from '../layouts/radial.js'
import {TreeLayout} from '../layouts/tree.js'

export function LayoutStage(editor) {
  this.editor = editor
  this.editor.on("onLayout", this.onLayout, this)
  this.editor.on("layoutSelected", this.layoutSelected, this)

  var layout = _.keys(LayoutStage.OPTIONS)[0]
  this.layout = new LayoutStage.OPTIONS[layout](this.editor)

  $(window)
    .resize(function() { editor.trigger("onLayout") })
}

LayoutStage.OPTIONS = {
  "Force": ForceLayout,
  "Radial": RadialLayout,
  "Tree": TreeLayout
}

LayoutStage.prototype.onLayout = function() {
  d3.select(this.editor.element)
    .select("svg")
    .attr("width", this.editor.element.clientWidth)
    .attr("height", this.editor.element.clientHeight)

  this.layout.apply(this.editor.data)
}

LayoutStage.prototype.layoutSelected = function(arg) {
  this.layout = new LayoutStage.OPTIONS[arg](this.editor)
  this.editor.trigger("beforeLayout")
}
