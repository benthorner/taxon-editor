import {Taxadio} from './modules/taxadio/taxadio.js'
import {Option} from './modules/taxadio/option.js'
import {Taxplay} from './modules/taxplay.js'
import {GOVUKTaxode} from './modules/taxodes/govuk.js'
import {FakeTaxode} from './modules/taxodes/fake.js'
import {Taxitor} from './modules/taxitor/taxitor.js'
import {ForceLayout} from './modules/taxitor/layouts/force.js'
import {RadialLayout} from './modules/taxitor/layouts/radial.js'
import {TreeLayout} from './modules/taxitor/layouts/tree.js'

$(document).ready(() => {
  var dataTaxadioNode = d3.select("#data-taxadio").node()
  var layoutTaxadioNode = d3.select("#layout-taxadio").node()

  var taxitorNode = d3.select("#taxitor").node()
  var taxitor = new Taxitor(taxitorNode)

  var layoutTaxadio = new Taxadio(layoutTaxadioNode, [
    new Option("Force", () => {
      taxitor.trigger("layoutSelected", new ForceLayout(taxitor))
    }),
    new Option("Radial", () => {
      taxitor.trigger("layoutSelected", new RadialLayout(taxitor))
    }),
    new Option("Tree", () => {
      taxitor.trigger("layoutSelected", new TreeLayout(taxitor))
    })
  ])

  var dataTaxadio = new Taxadio(dataTaxadioNode, [
    new Option("Fake", () => {
      taxitor.trigger("dataReceived", new FakeTaxode())
    }),
    new Option("GOV.UK", () => {
      GOVUKTaxode.root().then((d) => taxitor.trigger("dataReceived", d))
    })
  ])

  var taxplayNode = d3.select("#taxplay").node()
  var taxplay = new Taxplay(taxplayNode)

  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  taxitor.trigger("dataReceived", new FakeTaxode())
})
