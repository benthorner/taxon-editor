Taxitor.Layouts.Radial = function(editor) {
  _.extend(this, new Taxitor.Layouts.Base(editor))
  this.nodeBoundsScaleFactor = 15
}

Taxitor.Layouts.Radial.prototype.apply = function(root) {
  var that = this
  d3.tree().size([2*Math.PI, this.bounds().height])(root)

  root.descendants().forEach(function(d) {
    _.extend(d, that._coords(d))
    d.width = that.nodeWidth; d.height = that.nodeHeight
  })
}

Taxitor.Layouts.Radial.prototype._coords = function(d) {
  var radius = d.y / 2
  var angle = d.x

  return { x: radius*Math.cos(angle),
           y: radius*Math.sin(angle) }
}
