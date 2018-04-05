Taxitor.Stages.Layout = function(editor) {
  this.editor = editor
  this.layout = new Taxitor.Layouts.Radial(this.editor)
  this.editor.on("onLayout", this.onLayout, this)
  this.editor.on("afterUpdate", this.afterUpdate, this)

  $(window)
    .resize(function() { editor.trigger("onLayout") })
}

Taxitor.Stages.Layout.prototype.onLayout = function() {
  d3.select(this.editor.element)
    .select("svg")
    .attr("width", this.layout.bounds().width)
    .attr("height", this.layout.bounds().height)

  var root = this.editor.g.select(".node").datum()
  this.layout.apply(root)
}

