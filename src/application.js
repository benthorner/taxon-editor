$(document).ready(function() {
  var taxitor = new Taxitor(d3.select("#tree-container").node())
  taxitor.trigger("onInit", new Taxode.Fake())
})
