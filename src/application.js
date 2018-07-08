import {RadioTaxele} from './modules/taxeles/radio.js'
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
import {Session} from './session.js'

const session = new Session()

const sources = { "Fake": { "schema": FakeSchema, "taxode": FakeTaxode },
                  "GOV.UK": { "schema": GOVUKSchema, "taxode": GOVUKTaxode } }

const layouts = { "Wrap": WrapLayout, "Force": ForceLayout,
                  "Radial": RadialLayout, "Tree": TreeLayout }

document.addEventListener("DOMContentLoaded", () => {
  var taxitor = new Taxitor()
  var taxplay = new Taxplay()
  var doclist = new Doclist()

  var layoutRadio = new RadioTaxele("layout", _.keys(layouts), session)
  var sourceRadio = new RadioTaxele("source", _.keys(sources), session)

  layoutRadio.attach("#layout-taxadio")
  sourceRadio.attach("#source-taxadio")
  taxplay.attach("#taxplay")
  taxitor.attach("#taxitor")
  doclist.attach("#doclist")

  layoutRadio.on("onSelect", (d) => {
    taxitor.trigger("layoutSelected", new layouts[d](taxitor))
    taxitor.trigger("beforeLayout")
  })

  sourceRadio.on("onSelect", (d) => {
    taxplay.trigger("onClear")
    taxitor.trigger("onClear")
    doclist.trigger("onClear")
    taxplay.trigger("schemaSelected", new sources[d].schema(taxplay))
    taxitor.trigger("dataReceived", sources[d].taxode.root())
  })

  taxitor.on("nodeSelected", (d) => {
    doclist.trigger("dataReceived", d.docs.fetch())
  })

  taxplay.on("onSave", (d) => taxitor.trigger("beforeUpdate"))
  taxitor.on("nodeSelected", (d) => taxplay.trigger("dataReceived", d))
  sourceRadio.trigger("onSelect", session.get("source") || "Fake")
  layoutRadio.trigger("onSelect", session.get("layout") || "Wrap")
})
