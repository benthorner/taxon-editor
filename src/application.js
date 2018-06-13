import {RadioElement} from './modules/taxplay/elements/radio.js'
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

const layouts = { "Wrap": WrapLayout, "Force": ForceLayout,
                  "Radial": RadialLayout, "Tree": TreeLayout }

$(document).ready(() => {
  var layoutRadio = new RadioElement(options, "layout", _.keys(layouts))
  var schemaRadio = new RadioElement(options, "schema", ["Fake", "GOV.UK"])
  var taxitor = new Taxitor()
  var taxplay = new Taxplay()

  layoutRadio.attach("#layout-taxadio")
  schemaRadio.attach("#schema-taxadio")
  taxplay.attach("#taxplay")
  taxitor.attach("#taxitor")

  layoutRadio.on("change", (d) => {
    taxitor.trigger("layoutSelected", new layouts[d](taxitor))
  })

  schemaRadio.on("change", (d) => {
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

  taxplay.on("onSave", (d) => taxitor.trigger("beforeEnter"))
  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  taxitor.trigger("dataReceived", new FakeTaxode())
})
