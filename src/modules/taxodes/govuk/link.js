import {GOVUKTaxode} from '../govuk.js'
import {Link as BaseLink} from '../base/link.js'

const base_url = "https://www.gov.uk/api/content"

export class Link extends BaseLink {
  fetch() {
    return this._get().then((d) => {
      var links = d.links.level_one_taxons ||
                  d.links.child_taxons || []

      this.taxode.children = links.map((d2) => {
        return new GOVUKTaxode(d2, this.taxode)
      })

      return Promise.resolve()
    })
  }

  _get() {
    var path = this.taxode.node.get("base_path")
    var url = base_url + (path == "/" ? "" : path)
    return fetch(url).then((d) => d.json())
  }
}
