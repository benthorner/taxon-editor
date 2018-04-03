function Taxitor(element) {
  _.extend(this, Backbone.Events)
  this.element = element
  this.g = d3.select(element).append("svg").append("g")

  new Taxitor.Tree(this)
  new Taxitor.Expand(this)
  new Taxitor.Resize(this)
  this.on("all", this._pipe, this)
}

Taxitor.prototype._pipe = function(name, args) {
  var pipe = ["onData", "onBind", "afterBind",
              "beforeMove", "onMove", "afterMove"]

  var index = pipe.indexOf(name)
  if (index < 0 || index == pipe.length-1) return
  this.trigger(pipe[index+1], args)
}
