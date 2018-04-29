export class ZoomHandler {
  constructor(editor) {
    this.editor = editor
    this.options = editor.options[this.constructor.name]
    this.editor.on("afterUpdate", this.afterUpdate, this)
    this.editor.on("attach", this.attach, this)
  }

  attach() {
    this.editor.element
      .call(d3.zoom().on("zoom", () => {
        this.editor.g.attr("transform", d3.event.transform)
      }))
  }

  afterUpdate() {
    setTimeout(() => {
      var transform = this._scaleAndCenter()
      d3.zoom().transform(this.editor.element, transform)
      this.editor.g.transition().attr("transform", transform)
    }, this.options.transformDelay)
  }

  _scaleAndCenter() {
    var element = this.editor.element.node()
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
}
