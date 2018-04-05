Taxitor.Handlers.Select = function(editor) {
  this.editor = editor
  this.editor.on("afterLayout", this.afterLayout, this)
  this.editor.on("dataReceived", this.dataReceived, this)
}

Taxitor.Handlers.Select.prototype.dataReceived = function(d) {
  this.selected = d
  this.editor.trigger("nodeSelected", d)
}

Taxitor.Handlers.Select.prototype.afterLayout = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .on("click", function(d) {
      this.selected = d
      that.editor.trigger("nodeSelected", d)
    })
}
