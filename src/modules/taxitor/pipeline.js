Taxitor.Pipeline = function(editor) {
  this.editor = editor
  this.editor.on("all", this._all, this)
}

Taxitor.Pipeline.prototype._all = function(name, args) {
  var pipe = ["beforeEnter", "onEnter", "afterEnter",
              "beforeExit", "onExit", "afterExit",
              "beforeLayout", "onLayout", "afterLayout",
              "beforeUpdate", "onUpdate", "afterUpdate"]

  var index = pipe.indexOf(name)
  if (index < 0 || index == pipe.length-1) return
  this.editor.trigger(pipe[index+1], args)
}
