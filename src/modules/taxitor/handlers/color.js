Taxitor.Handlers.Color = function(editor) {
  this.editor = editor
  this.editor.on("onUpdate", this.onUpdate, this)
}

Taxitor.Handlers.Color.prototype.onUpdate = function() {
  var colors = ["#005EA5", "#2E358B", "#6F72AF", "#912B88",
                "#D53880", "#DF3034", "#F47738", "#006435",
                "#85994B", "#28A197", "#2B8CC4"]
  this.editor.g
    .selectAll(".node rect")
    .attr("fill", function(d) { return colors[d.depth] })
}
