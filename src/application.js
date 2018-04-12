import {Taxadio} from './modules/taxadio.js'
import {Taxplay} from './modules/taxplay.js'
import {RealTaxode} from './modules/taxodes/real.js'
import {FakeTaxode} from './modules/taxodes/fake.js'
import {Taxitor} from './modules/taxitor/taxitor.js'
import {LayoutStage} from './modules/taxitor/stages/layout.js'
import {Taxmenu} from './modules/taxmenu.js'

$(document).ready(function() {
  var layoutOptions = _.keys(LayoutStage.OPTIONS)
  var layoutTaxadioNode = d3.select("#layout-taxadio").node()
  var layoutTaxadio = new Taxadio(layoutTaxadioNode, layoutOptions)

  var dataTaxadioNode = d3.select("#data-taxadio").node()
  var dataTaxadio = new Taxadio(dataTaxadioNode, ["Fake", "Real"])

  var taxitorNode = d3.select("#taxitor").node()
  var taxitor = new Taxitor(taxitorNode)

  var taxplayNode = d3.select("#taxplay").node()
  var taxplay = new Taxplay(taxplayNode)

  layoutTaxadio.on("click", function(d) {
    taxitor.trigger("layoutSelected", d)
  })

  dataTaxadio.on("click", function(d) {
    switch(d) {
      case "Fake":
        taxitor.trigger("dataReceived", new FakeTaxode())
        break
      case "Real":
        taxitor.trigger("dataReceived", RealTaxode.root)
        break
    }
  })

  taxitor.on("nodeSelected", function(d) {
    taxplay.trigger("dataReceived", d)
  })

  taxitor.trigger("dataReceived", new FakeTaxode())
})
