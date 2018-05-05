export class WrapLayout {
  constructor(editor) {
    this.editor = editor
    this.options = editor.options[this.constructor.name]
  }

  call(root) {
    var tree = d3.hierarchy(root)
    var maxWidth = this._maxWidth(tree)
    var previous = root

    tree.eachBefore((d) => {
      if (d.data == root) {
        root.x = 0, root.y = 0
        return
      }

      d.data.x = previous.x + this.options.xSeparation
      d.data.y = previous.y

      if (d.data.x > maxWidth) {
        d.data.x = 0
        d.data.y = d.data.y + this.options.ySeparation
      }

      previous = d.data
    })
  }

  _maxWidth(tree) {
    var nodeArea = this.options.xSeparation *
      this.options.ySeparation * tree.descendants().length

    var element = this.editor.element.node()
    var clientArea = element.clientWidth * element.clientHeight

    // new node box has the same area but client box aspect ratio
    return Math.sqrt(nodeArea / clientArea) * element.clientWidth
  }
}
