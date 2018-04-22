export class TreeLayout {
  constructor(editor) {
    this.options = editor.options[this.constructor.name]
  }

  call(root) {
    var bounds = [this.options.xSeparation,
                  this.options.ySeparation]

    d3.tree().nodeSize(bounds)(root)
  }
}
