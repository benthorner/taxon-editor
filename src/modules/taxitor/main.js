function Taxitor(element) {
  _.extend(this, Backbone.Events)
  this.element = element

  this.g = d3
    .select(element)
    .append("svg")
    .append("g")
    .classed("taxitor", true)

  new Taxitor.Stages.Enter(this)
  new Taxitor.Stages.Exit(this)
  new Taxitor.Stages.Layout(this)
  new Taxitor.Stages.Update(this)
  new Taxitor.Handlers.Zoom(this)
  new Taxitor.Handlers.Expand(this)
  new Taxitor.Handlers.Color(this)
  new Taxitor.Pipeline(this)

  this.on("data", function(data) {
    this.data = data
    this.trigger("beforeEnter")
  })
}

