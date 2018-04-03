Taxitor.Binder = function(editor)
  this.editor = editor
  this.editor.g.append("g").attr("class", "lines")
  this.editor.g.append("g").attr("class", "nodes")

  editor.on("onData", this.onData, this)
  editor.on("onBind", this.onBind, this)
}

Taxitor.Binder.prototype.onData = function(data) {
  this.editor.data = data
}

Taxitor.Binder.prototype.onBind = function() {
  this.editor.g
    .selectAll(".node")
    .data(this.editor.data.descendants())
    .exit()
    .remove()

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
    .selectAll(".line")
    .data(this.editor.data.links())
    .exit()
    .remove()

  this.editor.g
    .select(".lines")
    .selectAll(".line")
    .data(this.editor.data.links())
    .enter()
    .append("line")
    .attr("class", "line")
}
