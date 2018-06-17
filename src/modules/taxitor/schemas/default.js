export class DefaultSchema {
  node(g, d) {
    d3.select(g)
      .append("rect")

    d3.select(g)
      .append("foreignObject")
      .attr("height", "1px")
      .attr("width", "1px")
      .style("overflow", "visible")
      .append("xhtml:div")
      .append("div")
      .classed("title", true)
      .html((d) => d.node.get("title"))
  }
}
