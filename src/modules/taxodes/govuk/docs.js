import {Docs as BaseDocs} from '../base/docs.js'
import {GOVUKTaxdoc} from '../../taxdocs/govuk.js'

const base_url = "https://www.gov.uk/api/search.json?"

export class Docs extends BaseDocs {
  count() {
    return this._search().then((d) => {
      return Promise.resolve(d["total"])
    })
  }

  fetch() {
    return this._search().then((d) => {
      var docs = d["results"].map((d2) => new GOVUKTaxdoc(d2))
      return Promise.resolve(docs)
    })
  }

  _search() {
    var params = { filter_taxons: this.taxode.id }
    return $.get(base_url + $.param(params))
  }
}
