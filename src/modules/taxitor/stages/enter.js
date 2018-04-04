Taxitor.Stages.Enter = function(editor) {
  this.editor = editor
  this.editor.g.append("g").attr("class", "lines")
  this.editor.g.append("g").attr("class", "nodes")
  this.editor.on("onEnter", this.onEnter, this)
}

Taxitor.Stages.Enter.prototype.onEnter = function() {
  var nodes = this.editor.g
    .select(".nodes")
    .selectAll(".node")
    .data(this.editor.data.descendants())
    .enter()
    .append("g")
    .attr("class", "node")

  nodes.append("circle")
  nodes.append("text")

  this.editor.g
    .select(".lines")
    .selectAll(".line")
    .data(this.editor.data.links())
    .enter()
    .append("line")
    .attr("class", "line")
}
