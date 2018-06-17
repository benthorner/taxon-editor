export class WrapLayout {
  constructor(editor) {
    this.editor = editor
    this.options = editor.options[this.constructor.name]
  }

  call(root) {
    var maxWidth = this._maxWidth(root)
    var previous = root

    root.tree.eachBefore((d) => {
      if (d == root) {
        root.x = 0, root.y = 0
        return
      }

      d.x = previous.x + this.options.xSeparation
      d.y = previous.y

      if (d.x > maxWidth) {
        d.x = 0
        d.y = d.y + this.options.ySeparation
      }

      previous = d
    })
  }

  _maxWidth(root) {
    var nodeArea = this.options.xSeparation *
      this.options.ySeparation * root.tree.nodes().length

    var container = this.editor.container.node()
    var clientArea = container.clientWidth * container.clientHeight

    // new node box has the same area but client box aspect ratio
    return Math.sqrt(nodeArea / clientArea) * container.clientWidth
  }
}
