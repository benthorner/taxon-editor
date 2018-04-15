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
  d3.event.stopPropagation()
  var that = this

  var promise = d.children ?
    d.contract() : d.expand()

  promise.then(() => {
    that.editor.trigger("beforeEnter")
  }).catch((e) => {
    that.editor.trigger("error", e)
  })
}
