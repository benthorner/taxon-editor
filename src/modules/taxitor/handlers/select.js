Taxitor.Handlers.Select = function(editor) {
  this.editor = editor
  this.editor.on("afterLayout", this.afterLayout, this)
  this.editor.on("dataReceived", this.dataReceived, this)
  this.editor.on("onUpdate", this.onUpdate, this)
  this.editor.on("nodeSelected", this.nodeSelected, this)
}

Taxitor.Handlers.Select.prototype.afterLayout = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .on("click", function(d) {
      that.selected = d
      that.editor.trigger("nodeSelected", d)
      that.editor.trigger("onUpdate")
    })
}

Taxitor.Handlers.Select.prototype.onUpdate = function() {
  var that = this

  this.editor.g
    .selectAll(".node")
    .classed("selected", function(d) { return that.selected == d })
}

Taxitor.Handlers.Select.prototype.nodeSelected = function(d) {
  this.selected = d
}
