Taxitor.Stages.Enter = function(editor) {
  this.editor = editor
  this.editor.g.append("g").attr("class", "links")
  this.editor.g.append("g").attr("class", "nodes")
  this.editor.on("onEnter", this.onEnter, this)
}

Taxitor.Stages.Enter.prototype.onEnter = function() {
  var nodes = this.editor.g
    .select(".nodes")
    .selectAll(".node")
    .data(this.editor.data.descendants(), function(d) { return d.id })
    .enter()
    .append("g")
    .attr("class", "node")

  nodes.append("circle")
  nodes.append("text")

  this.editor.g
    .select(".links")
    .selectAll(".link")
    .data(this.editor.data.links(), function(d) { return d.target.id })
    .enter()
    .append("line")
    .attr("class", "link")
}
