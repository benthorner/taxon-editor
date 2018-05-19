export class Tree {
  constructor(taxode) {
    this.taxode = taxode
  }

  eachBefore(callback) {
    d3.hierarchy(this.taxode).eachBefore((d) => callback(d.data))
  }

  nodes() {
    return d3.hierarchy(this.taxode).descendants().map((d) => d.data)
  }

  links() {
    return d3.hierarchy(this.taxode).links().map(this._link)
  }

  _link(d) {
    return { source: d.source.data, target: d.target.data }
  }
}
