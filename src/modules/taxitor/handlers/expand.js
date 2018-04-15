export function ExpandHandler(editor) {
  this.editor = editor
  editor.on("afterEnter", this.afterEnter, this)
}

ExpandHandler.prototype.afterEnter = function() {
  this.editor.g
    .selectAll(".node")
    .on("dblclick", this.onClick.bind(this))
}

ExpandHandler.prototype.onClick = function(d) {
  var that = this
  d3.event.stopPropagation()

  var promise = d.children ? d.contract() : d.expand()
  promise.then(() => that.editor.trigger("beforeEnter"))
}
