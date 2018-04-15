import {Taxadio} from './modules/taxadio/taxadio.js'
import {Option} from './modules/taxadio/option.js'
import {Taxplay} from './modules/taxplay.js'
import {RealTaxode} from './modules/taxodes/real.js'
import {FakeTaxode} from './modules/taxodes/fake.js'
import {Taxitor} from './modules/taxitor/taxitor.js'
import {ForceLayout} from './modules/taxitor/layouts/force.js'
import {RadialLayout} from './modules/taxitor/layouts/radial.js'
import {TreeLayout} from './modules/taxitor/layouts/tree.js'

$(document).ready(function() {
  var dataTaxadioNode = d3.select("#data-taxadio").node()
  var layoutTaxadioNode = d3.select("#layout-taxadio").node()

  var taxitorNode = d3.select("#taxitor").node()
  var taxitor = new Taxitor(taxitorNode)

  var layoutTaxadio = new Taxadio(layoutTaxadioNode, [
    new Option("Force", function() {
      taxitor.trigger("layoutSelected", new ForceLayout(taxitor))
    }),
    new Option("Radial", function() {
      taxitor.trigger("layoutSelected", new RadialLayout(taxitor))
    }),
    new Option("Tree", function() {
      taxitor.trigger("layoutSelected", new TreeLayout(taxitor))
    })
  ])

  var dataTaxadio = new Taxadio(dataTaxadioNode, [
    new Option("Fake", function() {
      taxitor.trigger("dataReceived", new FakeTqxode())
    }),
    new Option("Real", function() {
      taxitor.trigger("dataReceived", RealTaxode.root)
    })
  ])

  var taxplayNode = d3.select("#taxplay").node()
  var taxplay = new Taxplay(taxplayNode)

  taxitor.on("nodeSelected", function(d) {
    taxplay.trigger("dataReceived", d)
  })

  taxitor.trigger("dataReceived", new FakeTaxode())
})
