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
import {Doclist} from './modules/doclist/doclist.js'

const options = new Node({ "layout": "Wrap", "schema": "Fake" })

const layouts = { "Wrap": WrapLayout, "Force": ForceLayout,
                  "Radial": RadialLayout, "Tree": TreeLayout }

document.addEventListener("DOMContentLoaded", () => {
  var taxitor = new Taxitor()
  var taxplay = new Taxplay()
  var doclist = new Doclist()

  var layoutRadio = new RadioTaxele(options, "layout", _.keys(layouts))
  var schemaRadio = new RadioTaxele(options, "schema", ["Fake", "GOV.UK"])

  layoutRadio.attach("#layout-taxadio")
  schemaRadio.attach("#schema-taxadio")
  taxplay.attach("#taxplay")
  taxitor.attach("#taxitor")
  doclist.attach("#doclist")

  layoutRadio.on("onSelect", (d) => {
    taxitor.trigger("layoutSelected", new layouts[d](taxitor))
    taxitor.trigger("beforeLayout")
  })

  schemaRadio.on("onSelect", (d) => {
    taxplay.trigger("onClear")
    taxitor.trigger("onClear")
    doclist.trigger("onClear")

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

  taxitor.on("nodeSelected", (d) => {
    d.docs.fetch()
      .then((d2) => doclist.trigger("dataReceived", d2))
      .catch((d2) => console.log(d2))
  })

  taxplay.on("onSave", (d) => taxitor.trigger("beforeUpdate"))
  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  schemaRadio.trigger("onSelect", options.get("schema"))
  layoutRadio.trigger("onSelect", options.get("layout"))
})
