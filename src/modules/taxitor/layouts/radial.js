export class RadialLayout {
  constructor(editor) {
    this.editor = editor
    this.options = editor.options[this.constructor.name]
  }

  call(root) {
    d3.tree().size([2*Math.PI, this._maxRadius(root)*2])(root)

    root.descendants().forEach((d) => {
      var radius = d.y
      var angle = d.x

      d.x = radius * Math.cos(angle)
      d.y = radius * Math.sin(angle)
    })
  }

  _maxRadius(root) {
    var arcLength = this._diagonalSeparation() / 2
    var minAngle = 2*Math.PI / this._sumDepths(root)
    return arcLength / Math.sin(minAngle)
  }

  _sumDepths(root) {
    var depths = root.descendants().map((d) => d.depth)
    var maxDepth = _.max(depths)
    return depths.reduce((memo, d) => memo + 1 + maxDepth-d, 0)
  }

  _diagonalSeparation() {
    return Math.sqrt(Math.pow(this.options.xSeparation, 2) +
                     Math.pow(this.options.ySeparation, 2))
  }
}
