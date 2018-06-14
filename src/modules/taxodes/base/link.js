export class Link {
  constructor(taxode) {
    this.taxode = taxode
  }

  fetch() {
    return Promise.reject("Not supported")
  }

  reset() {
    this.taxode.children = null
  }
}
