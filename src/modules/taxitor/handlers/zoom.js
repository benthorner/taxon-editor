export function ZoomHandler(editor) {
  this.editor = editor
  this.options = editor.options[this.constructor.name]
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
    var transform = that._scaleAndCenter()

    d3.zoom().transform(d3.select(element), transform)
    that.editor.g.transition().attr("transform", transform)
  }, this.options.transformDelay)
}

ZoomHandler.prototype._scaleAndCenter = function() {
  var element = this.editor.element
  var box = this.editor.g.node().getBBox()

  var xScale = element.clientWidth / box.width
  var yScale = element.clientHeight / box.height

  return d3.zoomIdentity
    // third move the origin to the center of the viewer
    .translate(element.clientWidth/2, element.clientHeight/2)
    // second scale the canvas about the origin
    .scale(_.min([xScale, yScale, this.options.maxScaleFactor]))
    // first center the whole canvas as the origin
    .translate(-box.x - box.width/2, -box.y - box.height/2)
}
