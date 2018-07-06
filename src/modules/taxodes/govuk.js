import {BaseTaxode} from './base.js'
import {Link} from './govuk/link.js'
import {Docs} from './govuk/docs.js'
import {Config} from '../../config.js'

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
    return Config.get("Taxodes.GOVUKTaxode.baseURL") +
      this.node.get("base_path")
  }

  static root() {
    return fetch(this._api()).then((d) => d.json())
      .then((d) => Promise.resolve(new GOVUKTaxode(d)))
  }

  static _api() {
    return Config.get("Taxodes.GOVUKTaxode.baseURL") +
      "/api/content"
  }
}
