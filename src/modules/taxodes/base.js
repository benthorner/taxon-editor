export class BaseTaxode {
  constructor(parent) {
    this.parent = parent
    this.children = null
  }

  descendants() {
    return d3.hierarchy(this).descendants().map((d) => d.data)
  }

  links() {
    return d3.hierarchy(this).links().map(this._link)
  }

  _link(d) {
    return { source: d.source.data, target: d.target.data }
  }
}
