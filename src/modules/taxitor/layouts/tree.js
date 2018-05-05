export class TreeLayout {
  constructor(editor) {
    this.options = editor.options[this.constructor.name]
  }

  call(root) {
    var bounds = [this.options.xSeparation, this.options.ySeparation]
    var tree = d3.hierarchy(root)

    d3.tree().nodeSize(bounds)(tree)
    tree.eachBefore((d) => { d.data.x = d.x, d.data.y = d.y })
  }
}
