import {GOVUKTaxode} from '../govuk.js'
import {Link as LinkBase} from '../base/link.js'

const host = "https://www.gov.uk/api/content"

export class Link extends LinkBase {
  constructor(node) {
    super(node)
  }

  expand() {
    var path = host + this.node.base_path

    return $.get(path).then((d) => {
      var links = d.links.level_one_taxons ||
                  d.links.child_taxons || []

      this.node.children = links.map((d2) => {
        return new GOVUKTaxode(d2, this.node)
      })

      return Promise.resolve()
    })
  }
}
