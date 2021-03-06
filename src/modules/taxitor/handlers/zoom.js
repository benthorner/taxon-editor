import {Config} from '../../../config.js'

export class ZoomHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("afterUpdate", this.afterUpdate, this)
    this.editor.on("onAttach", this.onAttach, this)
  }

  onAttach() {
    this.editor.container
      .call(d3.zoom().on("zoom", () => {
        this.editor.element.attr("transform", d3.event.transform)
      }))
  }

  afterUpdate() {
    var delay = Config.get("Taxitor.ZoomHandler.transformDelay")
    var duration = Config.get("Taxitor.ZoomHandler.transformDuration")

    setTimeout(() => {
      var transform = this._scaleAndCenter()

      d3.zoom()
        .transform(this.editor.container, transform)

      this.editor.element
        .transition()
        .duration(duration)
        .attr("transform", transform)
    }, delay)
  }

  _scaleAndCenter() {
    var maxScaleFactor = Config.get("Taxitor.ZoomHandler.maxScaleFactor")

    var container = this.editor.container.node()
    var box = this.editor.element.node().getBBox()

    var xScale = container.clientWidth / box.width
    var yScale = container.clientHeight / box.height

    return d3.zoomIdentity
      // third move the origin to the center of the viewer
      .translate(container.clientWidth/2, container.clientHeight/2)
      // second scale the canvas about the origin
      .scale(_.min([xScale, yScale, maxScaleFactor]))
      // first center the whole canvas as the origin
      .translate(-box.x - box.width/2, -box.y - box.height/2)
  }
}
