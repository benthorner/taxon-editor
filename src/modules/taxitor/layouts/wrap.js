import {Config} from '../../../config.js'

export class WrapLayout {
  constructor(editor) {
    this.editor = editor
  }

  call(root) {
    var xSeparation = Config.get("Taxitor.WrapLayout.xSeparation")
    var ySeparation = Config.get("Taxitor.WrapLayout.ySeparation")

    var maxWidth = this._maxWidth(root)
    var previous = root

    root.tree.eachBefore((d) => {
      if (d == root) {
        root.x = 0, root.y = 0
        return
      }

      d.x = previous.x + xSeparation
      d.y = previous.y

      if (d.x > maxWidth) {
        d.x = 0
        d.y = d.y + ySeparation
      }

      previous = d
    })
  }

  _maxWidth(root) {
    var xSeparation = Config.get("Taxitor.WrapLayout.xSeparation")
    var ySeparation = Config.get("Taxitor.WrapLayout.ySeparation")
    var nodeArea = xSeparation * ySeparation * root.tree.nodes().length

    var container = this.editor.container.node()
    var clientArea = container.clientWidth * container.clientHeight

    // new node box has the same area but client box aspect ratio
    return Math.sqrt(nodeArea / clientArea) * container.clientWidth
  }
}
