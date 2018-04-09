Taxitor.Handlers.Select = function(editor) {
  this.editor = editor
  this.editor.on("afterEnter", this.afterEnter, this)
  this.editor.on("nodeSelected", this.nodeSelected, this)
}

Taxitor.Handlers.Select.prototype.afterEnter = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .on("click", function(d) {
      that.editor.trigger("nodeSelected", d)
    })
}

Taxitor.Handlers.Select.prototype.nodeSelected = function(d) {
  this.editor.g
    .selectAll(".node")
    .classed("selected", function(d2) { return d2 == d })
}
