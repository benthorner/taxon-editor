export class WrapLayout {
  constructor(editor) {
    this.editor = editor
    this.xSeparation = 110
    this.ySeparation = 110
  }

  call(root) {
    var previous = null
    var maxWidth = this._maxWidth(root)
    root.x = 0, root.y = 0

    root.eachBefore((d) => {
      if (previous == null) {
        previous = d; return
      }

      d.x = previous.x + this.xSeparation
      d.y = previous.y

      if (d.x > maxWidth) {
        d.x = 0
        d.y = d.y + this.ySeparation
      }

      previous = d
    })
  }

  _maxWidth(root) {
    var element = this.editor.element

    var nodesPerRow = element.clientWidth / this.xSeparation
    var clientArea = element.clientWidth * element.clientHeight

    var nodeArea = nodesPerRow * this.xSeparation *
      root.descendants().length * this.ySeparation / nodesPerRow

    // new node box has the same area but client box aspect ratio
    return Math.sqrt(nodeArea / clientArea) * element.clientWidth
  }
}
