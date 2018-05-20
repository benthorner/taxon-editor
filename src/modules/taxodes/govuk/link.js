import {GOVUKTaxode} from '../govuk.js'
import {Link as BaseLink} from '../base/link.js'

const host = "https://www.gov.uk/api/content"

export class Link extends BaseLink {
  fetch() {
    return $.get(this._path()).then((d) => {
      var links = d.links.level_one_taxons ||
                  d.links.child_taxons || []

      this.taxode.children = links.map((d2) => {
        return new GOVUKTaxode(d2, this.taxode)
      })

      return Promise.resolve()
    })
  }

  _path() {
    var path = this.taxode.node.get("base_path")
    return host + (path == "/" ? "" : path)
  }
}
