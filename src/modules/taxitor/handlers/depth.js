export class DepthHandler {
  constructor(editor) {
    this.editor = editor
    this.maxDepth = 0
    this.editor.on("onUpdate", this.onUpdate, this)
  }

  onUpdate() {
    var nodes = this.editor.g
      .selectAll(".node")
      .data()

    var depths = _.map(nodes, (d) => this._depth(d))
    this.maxDepth = _.max(depths + [this.maxDepth])

    for (var i=0; i<=this.maxDepth; i++) {
      this.editor.g
        .selectAll(".node")
        .classed("depth"+i, (d) => this._depth(d) == i)
    }
  }

  _depth(d) {
    return d.parent ? this._depth(d.parent) + 1 : 0
  }
}
