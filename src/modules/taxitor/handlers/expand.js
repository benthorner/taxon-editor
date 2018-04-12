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

  if (d.children) {
    d.contract().then(function() {
      that.editor.trigger("beforeEnter")
    })

    return
  }

  d.expand().then(function() {
    that.editor.trigger("beforeEnter")
  })
}
