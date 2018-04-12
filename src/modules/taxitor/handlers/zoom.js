export function ZoomHandler(editor) {
  this.editor = editor
  this.minScaleFactor = 2
  this.editor.on("afterUpdate", this.afterUpdate, this)

  d3.select(editor.element)
    .call(d3.zoom().on("zoom", function() {
      editor.g.attr("transform", d3.event.transform)
    }))
}

ZoomHandler.prototype.afterUpdate = function() {
  var that = this

  setTimeout(function() {
    var element = that.editor.element
    var transform = that._fillAndCenter()

    d3.zoom().transform(d3.select(element), transform)
    that.editor.g.transition().attr("transform", transform)
  }, 500)
}

ZoomHandler.prototype._fillAndCenter = function() {
  var element = this.editor.element
  var box = this.editor.g.node().getBBox()

  var xScale = element.clientWidth / box.width
  var yScale = element.clientHeight / box.height

  // transforms are applied in reverse to what you specify
  return d3.zoomIdentity
    .translate(element.clientWidth/2, element.clientHeight/2)
    .scale(_.min([xScale, yScale, this.minScaleFactor]))
    .translate(-box.x - box.width/2, -box.y - box.height/2)
}
