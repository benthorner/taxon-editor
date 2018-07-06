import {GOVUKTaxode} from '../govuk.js'
import {Link as BaseLink} from '../base/link.js'
import {Config} from '../../../config.js'

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
    var url = this._api() + (path == "/" ? "" : path)
    return fetch(url).then((d) => d.json())
  }

  _api() {
    return Config.get("Taxodes.GOVUKTaxode.baseURL") +
      "/api/content"
  }
}
