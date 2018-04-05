Taxitor.Layouts.Tree = function(editor) {
  _.extend(this, new Taxitor.Layouts.Base(editor))
}

Taxitor.Layouts.Tree.prototype.apply = function(root) {
  var that = this
  var bounds = this.bounds()

  d3.tree().size([bounds.width, bounds.height])(root)

  root.descendants().forEach(function(d) {
    d.width = that.nodeWidth; d.height = that.nodeHeight
  })
}
