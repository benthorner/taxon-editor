export class DefaultSchema {
  constructor(editor) {
    this.editor = editor
  }

  node(g, d) {
    d3.select(g)
      .append("rect")

    var foreignObject = d3.select(g)
      .append("foreignObject")
      .attr("height", "1px")
      .attr("width", "1px")
      .style("overflow", "visible")

    foreignObject.append("xhtml:div")
      .append("div")
      .classed("title", true)
      .html((d) => d.node.get("title"))

    var count = foreignObject.datum()
      .docs
      .count()

    count.then((d) => {
      foreignObject.append("xhtml:div")
        .append("div")
        .classed("count", true)
        .html(d)
    }).catch((e) => {
      this.editor.trigger("error", e)
    })
  }
}
