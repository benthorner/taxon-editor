import {BaseTaxode} from './base.js'
const host = "https://www.gov.uk/api/content"

export class GOVUKTaxode extends BaseTaxode {
  constructor(taxon, parent) {
    super(parent)
    this.title = taxon.title
    this.description = taxon.description
    this.id = taxon.content_id
    this.base_path = taxon.base_path == "/" ? "" : taxon.base_path
  }

  static root() {
    return $.get(host)
      .then((d) => Promise.resolve(new GOVUKTaxode(d)))
  }

  expand() {
    return $.get(host + this.base_path).then((d) => {
      var links = d.links.level_one_taxons ||
                  d.links.child_taxons || []

      this._children = links.map((d2) => new GOVUKTaxode(d2, this))
      return Promise.resolve()
    })
  }

  contract() {
    this._children = []
    return Promise.resolve()
  }

  createChild() {
    return Promise.reject("Not supported")
  }

  delete() {
    return Promise.reject("Not supported")
  }
}
