Taxitor.Stages.Layout = function(editor) {
  this.editor = editor
  this.nodeBoundsScaleFactor = 25
  this.editor.on("onLayout", this.onLayout, this)
  this.editor.on("afterUpdate", this.afterUpdate, this)

  $(window)
    .resize(function() { editor.trigger("onLayout") })
}

Taxitor.Stages.Layout.prototype.onLayout = function() {
  d3.select(this.editor.element)
    .select("svg")
    .attr("width", this._bounds()[0])
    .attr("height", this._bounds()[1])

  var root = this.editor.g.select(".node").datum()
  d3.tree().size(this._bounds())(root)
}

Taxitor.Stages.Layout.prototype._bounds = function() {
  var element = this.editor.element
  var nodes = this.editor.g.selectAll(".node").nodes()

  var scale = nodes.length + this.nodeBoundsScaleFactor
  scale /= this.nodeBoundsScaleFactor

  return [element.clientWidth*scale,
          element.clientHeight*scale]
}
