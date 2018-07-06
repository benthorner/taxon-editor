import {Config} from '../../../config.js'

export class RadialLayout {
  constructor(editor) {
    this.editor = editor
  }

  call(root) {
    var tree = d3.hierarchy(root)
    d3.tree().size([2*Math.PI, this._maxRadius(tree)*2])(tree)

    tree.descendants().forEach((d) => {
      var radius = d.y, angle = d.x
      d.data.x = radius * Math.cos(angle)
      d.data.y = radius * Math.sin(angle)
    })
  }

  _maxRadius(tree) {
    var arcLength = this._diagonalSeparation() / 2
    var minAngle = 2*Math.PI / this._sumDepthsFromOutside(tree)
    return arcLength / Math.sin(minAngle)
  }

  _sumDepthsFromOutside(tree) {
    var depths = tree.descendants().map((d) => d.depth)
    var maxDepth = _.max(depths)
    return depths.reduce((memo, d) => memo + 1 + maxDepth-d, 0)
  }

  _diagonalSeparation() {
    var xSeparation = Config.get("Taxitor.RadialLayout.xSeparation")
    var ySeparation = Config.get("Taxitor.RadialLayout.ySeparation")

    return Math.sqrt(Math.pow(xSeparation, 2) +
                     Math.pow(ySeparation, 2))
  }
}
