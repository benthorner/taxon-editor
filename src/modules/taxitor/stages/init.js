Taxitor.Stages.Init = function(editor) {
  this.editor = editor
  this.editor.on("onInit", this.onInit, this)
}

Taxitor.Stages.Init.prototype.onInit = function(data) {
  this.editor.data = data
}
