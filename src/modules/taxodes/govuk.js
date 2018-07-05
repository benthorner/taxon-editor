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

  get url() {
    return "https://www.gov.uk" + this.node.get("base_path")
  }

  static root() {
    return fetch(base_url).then((d) => d.json())
      .then((d) => Promise.resolve(new GOVUKTaxode(d)))
  }
}
