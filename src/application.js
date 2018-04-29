import {Taxadio} from './modules/taxadio/taxadio.js'
import {Item} from './modules/taxadio/item.js'
import {Taxplay} from './modules/taxplay.js'
import {GOVUKTaxode} from './modules/taxodes/govuk.js'
import {FakeTaxode} from './modules/taxodes/fake.js'
import {Taxitor} from './modules/taxitor/taxitor.js'
import {ForceLayout} from './modules/taxitor/layouts/force.js'
import {RadialLayout} from './modules/taxitor/layouts/radial.js'
import {TreeLayout} from './modules/taxitor/layouts/tree.js'
import {WrapLayout} from './modules/taxitor/layouts/wrap.js'

$(document).ready(() => {
  new Taxadio([
    new Item("Wrap", () => {
      taxitor.trigger("layoutSelected", new WrapLayout(taxitor))
    }),
    new Item("Force", () => {
      taxitor.trigger("layoutSelected", new ForceLayout(taxitor))
    }),
    new Item("Radial", () => {
      taxitor.trigger("layoutSelected", new RadialLayout(taxitor))
    }),
    new Item("Tree", () => {
      taxitor.trigger("layoutSelected", new TreeLayout(taxitor))
    })
  ]).attach("#layout-taxadio")

  new Taxadio([
    new Item("Fake", () => {
      taxitor.trigger("dataReceived", new FakeTaxode())
    }),
    new Item("GOV.UK", () => {
      GOVUKTaxode.root().then((d) => taxitor.trigger("dataReceived", d))
    })
  ]).attach("#taxode-taxadio")

  var taxitor = new Taxitor()
  var taxplay = new Taxplay()

  taxplay.attach("#taxplay")
  taxitor.attach("#taxitor")

  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  taxitor.trigger("dataReceived", new FakeTaxode())
})
