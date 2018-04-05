$(document).ready(function() {
  var layoutOptions = Taxitor.Stages.Layout.OPTIONS
  var layoutTaxadioNode = d3.select("#layout-taxadio").node()
  var layoutTaxadio = new Taxadio(layoutTaxadioNode, layoutOptions)

  var dataTaxadioNode = d3.select("#data-taxadio").node()
  var dataTaxadio = new Taxadio(dataTaxadioNode, ["Fake", "Real"])

  var taxitorNode = d3.select("#taxitor").node()
  var taxitor = new Taxitor(taxitorNode)

  layoutTaxadio.on("click", function(d) {
    taxitor.trigger("layoutSelected", d)
  })

  dataTaxadio.on("click", function(d) {
    switch(d) {
      case "Fake":
        taxitor.trigger("dataReceived", new Taxode.Fake())
        break
      case "Real":
        taxitor.trigger("dataReceived", Taxode.Real.root)
        break
    }
  })

  taxitor.trigger("dataReceived", new Taxode.Fake())
})
