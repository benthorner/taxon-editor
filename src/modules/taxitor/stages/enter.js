export class EnterStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onEnter", this.onEnter, this)
    this.editor.on("attach", this.attach, this)
  }

  attach() {
    this.editor.g.append("g").attr("class", "links")
    this.editor.g.append("g").attr("class", "nodes")
  }

  onEnter() {
    var tree = this.editor.data.tree

    var nodes = this.editor.g
      .select(".nodes")
      .selectAll(".node")
      .data(tree.nodes(), (d) => d.id)
      .enter()
      .append("g")
      .classed("node", true)

    nodes.append("rect")

    nodes.append("foreignObject")
      .append("xhtml:div")
      .append("div")
      .classed("title", true)

    this.editor.g
      .select(".links")
      .selectAll(".link")
      .data(tree.links(), (d) => d.target.id)
      .enter()
      .append("line")
      .classed("link", true)
  }
}
