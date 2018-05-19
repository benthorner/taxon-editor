export class Node {
  constructor(taxode) {
    this.taxode = taxode
  }

  save() {
    return Promise.reject("Not supported")
  }

  delete() {
    return Promise.reject("Not supported")
  }
}
