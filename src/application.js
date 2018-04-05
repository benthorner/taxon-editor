$(document).ready(function() {
  var taxitor = new Taxitor(d3.select("#tree-container").node())
  //new Taxadio(d3.select("#data-radio").node(), ["one", "two"])
  taxitor.trigger("data", new Taxode.Fake())
  //taxitor.trigger("onInit", Taxode.Real.root)
})
