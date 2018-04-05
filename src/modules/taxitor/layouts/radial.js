Taxitor.Layouts.Radial = function(editor) {
  _.extend(this, new Taxitor.Layouts.Base(editor))
  this.nodeWidth = 50
  this.nodeHeight = 50
}

Taxitor.Layouts.Radial.prototype.apply = function(root) {
  var that = this
  var radius = this.bounds().height
  d3.tree().size([2*Math.PI, radius])(root)

  root.descendants().forEach(function(d) {
    _.extend(d, that._coords(d))
    d.width = that.nodeWidth
    d.height = that.nodeHeight
  })
}

Taxitor.Layouts.Radial.prototype._coords = function(d) {
  var radius = d.y / 2
  var angle = d.x

  return { x: radius*Math.cos(angle),
           y: radius*Math.sin(angle) }
}
