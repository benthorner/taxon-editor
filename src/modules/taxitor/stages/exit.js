export function ExitStage(editor) {
  this.editor = editor
  this.editor.on("onExit", this.onExit, this)
}

ExitStage.prototype.onExit = function() {
  this.editor.g
    .selectAll(".node")
    .data(this.editor.data.descendants(), function(d) { return d.id })
    .exit()
    .remove()

  this.editor.g
    .selectAll(".link")
    .data(this.editor.data.links(), function(d) { return d.target.id })
    .exit()
    .remove()
}
