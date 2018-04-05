Taxitor.Layouts.Base = function(editor) {
  this.editor = editor
  this.nodeBoundsScaleFactor = 25
}

Taxitor.Layouts.Base.prototype.bounds = function() {
  var element = this.editor.element
  var nodes = this.editor.g.selectAll(".node").nodes()

  var scale = nodes.length + this.nodeBoundsScaleFactor
  scale /= this.nodeBoundsScaleFactor

  return { width: element.clientWidth * scale,
           height: element.clientHeight * scale }

}
