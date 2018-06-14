import {RadioTaxele} from './modules/taxeles/radio.js'
import {Node} from './modules/taxodes/base/node.js'
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

const options = new Node({ "layout": "Wrap", "schema": "Fake" })

$(document).ready(() => {
  var taxitor = new Taxitor()
  var taxplay = new Taxplay()

  var layoutRadio = new RadioTaxele(options, "layout",
    ["Wrap", "Force", "Radial", "Tree"])

  var schemaRadio = new RadioTaxele(options, "schema",
    ["Fake", "GOV.UK"])

  layoutRadio.attach("#layout-taxadio")
  schemaRadio.attach("#schema-taxadio")
  taxplay.attach("#taxplay")
  taxitor.attach("#taxitor")

  taxplay.on("onSave", (d) => taxitor.trigger("beforeEnter"))
  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  taxitor.trigger("dataReceived", new FakeTaxode())

  layoutRadio.on("onSelect", (d) => {
    switch(d) {
      case "Wrap":
        taxitor.trigger("layoutSelected", new WrapLayout(taxitor))
        break
      case "Force":
        taxitor.trigger("layoutSelected", new ForceLayout(taxitor))
        break
      case "Radial":
        taxitor.trigger("layoutSelected", new RadialLayout(taxitor))
        break
      case "Tree":
        taxitor.trigger("layoutSelected", new TreeLayout(taxitor))
        break
    }
  })

  schemaRadio.on("onSelect", (d) => {
    switch(d) {
      case "Fake":
        taxplay.trigger("schemaSelected", new FakeSchema(taxplay))
        taxitor.trigger("dataReceived", new FakeTaxode())
        break
      case "GOV.UK":
        taxplay.trigger("schemaSelected", new GOVUKSchema(taxplay))
        GOVUKTaxode.root().then((d) => taxitor.trigger("dataReceived", d))
        break
    }
  })
})
