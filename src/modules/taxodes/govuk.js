import {BaseTaxode} from './base.js'

export function GOVUKTaxode(taxon, parent) {
  _.extend(this, new BaseTaxode(parent))
  this.title = taxon.title
  this.description = taxon.description
  this.id = taxon.content_id

  this.base_path = taxon.base_path == "/"
    ? "" : taxon.base_path
}

GOVUKTaxode.HOST = "https://www.gov.uk/api/content"

GOVUKTaxode.root = function() {
  return new Promise((resolve, reject) => {
    $.get(GOVUKTaxode.HOST)
      .then((d) => resolve(new GOVUKTaxode(d)))
  })
}

GOVUKTaxode.prototype.expand = function() {
  var that = this
  var path = GOVUKTaxode.HOST + this.base_path

  return $.get(path).then((d) => {
    var links = d.links.level_one_taxons ||
      d.links.child_taxons

    if (links) {
      that.children = links.map((d2) => {
        return new GOVUKTaxode(d2, that)
      })
    }

    return Promise.resolve()
  })
}

GOVUKTaxode.prototype.createChild = function() {
  var that = this
  return Promise.reject("Not supported")
}

GOVUKTaxode.prototype.delete = function() {
  var that = this
  return Promise.reject("Not supported")
}
