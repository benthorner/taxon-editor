import {Docs as BaseDocs} from '../base/docs.js'

const base_url = "https://www.gov.uk/api/search.json?"

export class Docs extends BaseDocs {
  count() {
    var params = { filter_taxons: this.taxode.id }

    return $.get(base_url + $.param(params)).then((d) => {
      return Promise.resolve(d["total"])
    })
  }
}
