export class Tree {
  constructor(node) {
    this.node = node
  }

  eachBefore(callback) {
    d3.hierarchy(this.node).eachBefore((d) => callback(d.data))
  }

  nodes() {
    return d3.hierarchy(this.node).descendants().map((d) => d.data)
  }

  links() {
    return d3.hierarchy(this.node).links().map(this._link)
  }

  _link(d) {
    return { source: d.source.data, target: d.target.data }
  }
}
