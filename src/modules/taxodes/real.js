import {BaseTaxode} from './base.js'

export function RealTaxode(taxon, parent) {
  _.extend(this, new BaseTaxode(parent))
  this.title = taxon.title
  this.description = taxon.description
  this.id = taxon.content_id

  this.base_path = taxon.base_path == "/"
    ? "" : taxon.base_path
}

RealTaxode.host = "https://www.gov.uk/api/content"

RealTaxode.root = function() {
  return new Promise((resolve, reject) => {
    $.get(RealTaxode.host)
      .then((d) => resolve(new RealTaxode(d)))
  })
}

RealTaxode.prototype.expand = function() {
  var that = this
  var path = RealTaxode.host + this.base_path

  return $.get(path).then((d) => {
    var links = d.links.level_one_taxons ||
      d.links.child_taxons

    if (links) {
      that.children = links.map((d2) => {
        return new RealTaxode(d2, that)
      })
    }

    return Promise.resolve()
  })
}

RealTaxode.prototype.contract = function() {
  var that = this
  that.children = null
  return Promise.resolve()
}

RealTaxode.prototype.createChild = function() {
  var that = this
  return Promise.reject("Not supported")
}

RealTaxode.prototype.delete = function() {
  var that = this
  return Promise.reject("Not supported")
}
