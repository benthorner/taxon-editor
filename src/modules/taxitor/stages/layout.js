Taxitor.Stages.Layout = function(editor) {
  this.editor = editor
  this.editor.on("onLayout", this.onLayout, this)
  this.editor.on("layoutSelected", this.layoutSelected, this)

  var layout = Taxitor.Stages.Layout.OPTIONS[0]
  this.layout = new Taxitor.Layouts[layout](this.editor)

  $(window)
    .resize(function() { editor.trigger("onLayout") })
}

Taxitor.Stages.Layout.OPTIONS = ["Force", "Radial", "Tree"]

Taxitor.Stages.Layout.prototype.onLayout = function() {
  d3.select(this.editor.element)
    .select("svg")
    .attr("width", this.layout.bounds().width)
    .attr("height", this.layout.bounds().height)

  var root = this.editor.g.select(".node").datum()
  this.layout.apply(root)
}

Taxitor.Stages.Layout.prototype.layoutSelected = function(arg) {
  this.layout = new Taxitor.Layouts[arg](this.editor)
  this.editor.trigger("beforeLayout")
}
