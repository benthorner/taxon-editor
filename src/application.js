import {Taxadio} from './modules/taxadio/taxadio.js'
import {Item} from './modules/taxadio/item.js'
import {Taxplay} from './modules/taxplay/taxplay.js'
import {GOVUKTaxode} from './modules/taxodes/govuk.js'
import {FakeTaxode} from './modules/taxodes/fake.js'
import {Taxitor} from './modules/taxitor/taxitor.js'
import {ForceLayout} from './modules/taxitor/layouts/force.js'
import {RadialLayout} from './modules/taxitor/layouts/radial.js'
import {TreeLayout} from './modules/taxitor/layouts/tree.js'
import {WrapLayout} from './modules/taxitor/layouts/wrap.js'
import {FakeSchema} from './modules/taxplay/schemas/fake.js'
import {GOVUKSchema} from './modules/taxplay/schemas/govuk.js'

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

  var taxitor = new Taxitor()
  var taxplay = new Taxplay()

  taxplay.attach("#taxplay")
  taxitor.attach("#taxitor")

  new Taxadio([
    new Item("Fake", () => {
      taxplay.trigger("schemaSelected", new FakeSchema(taxplay))
      taxitor.trigger("dataReceived", new FakeTaxode())
    }),
    new Item("GOV.UK", () => {
      taxplay.trigger("schemaSelected", new GOVUKSchema(taxplay))
      GOVUKTaxode.root().then((d) => taxitor.trigger("dataReceived", d))
    })
  ]).attach("#taxode-taxadio")

  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  taxitor.trigger("dataReceived", new FakeTaxode())
})
