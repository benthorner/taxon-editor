export function SelectHandler(editor) {
  this.editor = editor
  this.editor.on("afterEnter", this.afterEnter, this)
  this.editor.on("nodeSelected", this.nodeSelected, this)
}

SelectHandler.prototype.afterEnter = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .on("click", (d) => that.editor.trigger("nodeSelected", d))
}

SelectHandler.prototype.nodeSelected = function(d) {
  this.editor.g
    .selectAll(".node")
    .classed("selected", (d2) => d2 == d)
}
