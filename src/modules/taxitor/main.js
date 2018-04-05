function Taxitor(element) {
  _.extend(this, Backbone.Events)
  this.element = element

  this.g = d3
    .select(element)
    .append("svg")
    .append("g")
    .classed("taxitor", true)

  new Taxitor.Stages.Init(this)
  new Taxitor.Stages.Enter(this)
  new Taxitor.Stages.Exit(this)
  new Taxitor.Stages.Layout(this)
  new Taxitor.Stages.Update(this)
  new Taxitor.Handlers.Zoom(this)
  new Taxitor.Handlers.Expand(this)
  new Taxitor.Handlers.Color(this)
  this.on("all", this._pipe, this)
}

Taxitor.prototype._pipe = function(name, args) {
  var pipe = ["beforeInit", "onInit", "afterInit",
              "beforeEnter", "onEnter", "afterEnter",
              "beforeExit", "onExit", "afterExit",
              "beforeLayout", "onLayout", "afterLayout",
              "beforeUpdate", "onUpdate", "afterUpdate"]

  var index = pipe.indexOf(name)
  if (index < 0 || index == pipe.length-1) return
  this.trigger(pipe[index+1], args)
}
