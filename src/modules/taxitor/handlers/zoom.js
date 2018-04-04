Taxitor.Handlers.Zoom = function(editor) {
  d3.select(editor.element)
    .call(d3.zoom().on("zoom", function() {
      editor.g.attr("transform", d3.event.transform)
    }))
}
