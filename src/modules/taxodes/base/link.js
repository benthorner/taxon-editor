export class Link {
  constructor(taxode) {
    this.taxode = taxode
  }

  reset() {
    this.taxode.children = null
  }

  fetch() {
    return Promise.reject("Not supported")
  }

  save() {
    return Promise.reject("Not supported")
  }

  remove(taxode) {
    var children = this.taxode.children
    this.taxode.children = _.without(children, taxode)
    taxode.parent = null
  }

  create(taxode) {
    this.add(taxode)
    return this.save()
  }

  delete() {
    var parent = this.taxode.parent
    parent.link.remove(this.taxode)
    return parent.link.save()
  }

  add(taxode) {
    taxode.parent = this.taxode
    this.taxode.children.push(taxode)
  }
}
