export class EnterStage {
  constructor(editor) {
    this.editor = editor
    this.editor.on("onEnter", this.onEnter, this)
    this.editor.on("onAttach", this.onAttach, this)
  }

  onAttach() {
    this.editor.element
      .append("g")
      .attr("class", "links")

    this.editor.element
      .append("g")
      .attr("class", "nodes")
  }

  onEnter() {
    var tree = this.editor.data.tree

    this.editor.element
      .select(".nodes")
      .selectAll(".node")
      .data(tree.nodes(), (d) => d.id)
      .enter()
      .append("g")
      .classed("node", true)

    this.editor.element
      .select(".links")
      .selectAll(".link")
      .data(tree.links(), (d) => d.target.id)
      .enter()
      .append("line")
      .classed("link", true)
  }
}
