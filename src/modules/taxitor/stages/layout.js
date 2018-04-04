Taxitor.Stages.Layout = function(editor) {
  this.editor = editor
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
  return [element.clientWidth, element.clientHeight]
}
