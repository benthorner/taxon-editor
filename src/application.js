$(document).ready(function() {
  var layoutOptions = Taxitor.Stages.Layout.OPTIONS
  var layoutTaxadioNode = d3.select("#layout-taxadio").node()
  var layoutTaxadio = new Taxadio(layoutTaxadioNode, layoutOptions)

  var taxitorNode = d3.select("#taxitor").node()
  var taxitor = new Taxitor(taxitorNode)

  layoutTaxadio.on("click", function(d) {
    taxitor.trigger("layoutSelected", d)
  })

  taxitor.trigger("dataReceived", new Taxode.Fake())
  //taxitor.trigger("dataReceived", Taxode.Real.root)
})
