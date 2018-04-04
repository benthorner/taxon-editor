Taxitor.Stages.Exit = function(editor) {
  this.editor = editor
  this.editor.on("onExit", this.onExit, this)
}

Taxitor.Stages.Exit.prototype.onExit = function() {
  this.editor.g
    .selectAll(".node")
    .data(this.editor.data.descendants())
    .exit()
    .remove()

  this.editor.g
    .selectAll(".line")
    .data(this.editor.data.links())
    .exit()
    .remove()
}
