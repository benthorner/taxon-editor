import {BaseTaxode} from './base.js'
import {Link} from './govuk/link.js'
import {Docs} from './govuk/docs.js'

const base_url = "https://www.gov.uk/api/content"

export class GOVUKTaxode extends BaseTaxode {
  constructor(taxon, parent) {
    super(taxon, parent)
    this.link = new Link(this)
    this.docs = new Docs(this)
  }

  get id() {
    return this.node.get("content_id")
  }

  static root() {
    return $.get(base_url)
      .then((d) => Promise.resolve(new GOVUKTaxode(d)))
  }
}
