import {BaseTaxode} from './base.js'
import {Link} from './govuk/link.js'

const host = "https://www.gov.uk/api/content"

export class GOVUKTaxode extends BaseTaxode {
  constructor(taxon, parent) {
    super(parent)
    this.link = new Link(this)
    this.title = taxon.title
    this.description = taxon.description
    this.id = taxon.content_id
    this.base_path = taxon.base_path == "/" ? "" : taxon.base_path
  }

  static root() {
    return $.get(host)
      .then((d) => Promise.resolve(new GOVUKTaxode(d)))
  }
}
