import {Config} from '../../../config.js'

export class TreeLayout {
  call(root) {
    var xSeparation = Config.get("Taxitor.TreeLayout.xSeparation")
    var ySeparation = Config.get("Taxitor.TreeLayout.ySeparation")

    var bounds = [xSeparation, ySeparation]
    var tree = d3.hierarchy(root)

    d3.tree().nodeSize(bounds)(tree)
    tree.eachBefore((d) => { d.data.x = d.x, d.data.y = d.y })
  }
}
