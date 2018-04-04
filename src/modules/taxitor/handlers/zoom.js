Taxitor.Handlers.Zoom = function(editor) {
  this.editor = editor
  this.editor.on("afterUpdate", this.afterUpdate, this)

  d3.select(editor.element)
    .call(d3.zoom().on("zoom", function() {
      editor.g.attr("transform", d3.event.transform)
    }))
}

Taxitor.Handlers.Zoom.prototype.afterUpdate = function() {
  var element = this.editor.element
  var transform = this._fillAndCenter()

  d3.zoom().transform(d3.select(element), transform)
  this.editor.g.attr("transform", transform)
}

Taxitor.Handlers.Zoom.prototype._fillAndCenter = function() {
  var element = this.editor.element
  var box = this.editor.g.node().getBBox()

  var xScale = element.clientWidth / box.width
  var yScale = element.clientHeight / box.height

  // transforms are applied in reverse to what you specify
  return d3.zoomIdentity
    .translate(element.clientWidth/2, element.clientHeight/2)
    .scale(_.min([xScale, yScale]))
    .translate(-box.x - box.width/2, -box.y - box.height/2)
}
