export class DefaultSchema {
  constructor(editor) {
    this.editor = editor
    this.options = editor.options[this.constructor.name]
  }

  node(g, d) {
    d3.select(g)
      .append("rect")
      .attr("height", `${this.options.nodeHeight}px`)
      .attr("width", `${this.options.nodeWidth}px`)

    var foreignObject = d3.select(g)
      .append("foreignObject")
      .attr("height", `${this.options.nodeHeight}px`)
      .attr("width", `${this.options.nodeWidth}px`)
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
