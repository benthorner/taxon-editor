Taxitor.Layouts.Base = function(editor) {
  this.editor = editor
  this.nodeWidth = 100
  this.nodeHeight = 100
  this.nodeBoundsScaleFactor = 20
}

Taxitor.Layouts.Base.prototype.bounds = function() {
  var element = this.editor.element
  var nodes = this.editor.g.selectAll(".node").nodes()

  var scale = nodes.length + this.nodeBoundsScaleFactor
  scale /= this.nodeBoundsScaleFactor

  return { width: element.clientWidth * scale,
           height: element.clientHeight * scale }

}
