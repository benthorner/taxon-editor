import {Config} from '../../../config.js'

export class DefaultSchema {
  constructor(editor) {
    this.editor = editor
    this.context = this.constructor.name
  }

  node(g, d) {
    var nodeWidth = Config.get("Taxitor.DefaultSchema.nodeWidth")
    var nodeHeight = Config.get("Taxitor.DefaultSchema.nodeHeight")

    d3.select(g)
      .append("rect")
      .attr("height", `${nodeHeight}px`)
      .attr("width", `${nodeWidth}px`)

    var foreignObject = d3.select(g)
      .append("foreignObject")
      .attr("height", `${nodeHeight}px`)
      .attr("width", `${nodeWidth}px`)
      .style("overflow", "visible")

    foreignObject.append("xhtml:div")
      .classed("title", true)
      .html((d) => d.node.get("title"))

    var count = foreignObject.datum()
      .docs
      .count()

    count.then((d) => {
      foreignObject.append("xhtml:div")
        .classed("count", true)
        .html(d)
    }).catch((e) => {
      this.editor.trigger("error", e)
    })
  }
}
