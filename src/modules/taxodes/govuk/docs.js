import {Docs as BaseDocs} from '../base/docs.js'
import {GOVUKTaxdoc} from '../../taxdocs/govuk.js'
import {Config} from '../../../config.js'

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
    var url = this._api() + `filter_taxons=${this.taxode.id}`
    return fetch(url).then((d) => d.json())
  }

  _api() {
    return Config.get("Taxodes.GOVUKTaxode.baseURL") +
      "/api/search.json?"
  }
}
