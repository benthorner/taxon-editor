export function EnterStage(editor) {
  this.editor = editor
  this.editor.g.append("g").attr("class", "links")
  this.editor.g.append("g").attr("class", "nodes")
  this.editor.on("onEnter", this.onEnter, this)
}

EnterStage.prototype.onEnter = function() {
  var nodes = this.editor.g
    .select(".nodes")
    .selectAll(".node")
    .data(this.editor.data.descendants(), (d) => d.id)
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
    .data(this.editor.data.links(), (d) => d.target.id)
    .enter()
    .append("line")
    .classed("link", true)
}
