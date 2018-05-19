import {BaseTaxode} from './base.js'
import {Link} from './govuk/link.js'

const host = "https://www.gov.uk/api/content"

export class GOVUKTaxode extends BaseTaxode {
  constructor(taxon, parent) {
    super(taxon, parent)
    this.link = new Link(this)
  }

  get id() {
    return this.node.get("content_id")
  }

  static root() {
    return $.get(host)
      .then((d) => Promise.resolve(new GOVUKTaxode(d)))
  }
}
