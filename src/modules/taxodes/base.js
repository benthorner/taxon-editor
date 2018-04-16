export class BaseTaxode {
  constructor(parent) {
    this.parent = parent
    this._children = []
    this.depth = parent ? parent.depth + 1 : 0
  }

  get children() {
    var length = this._children.length
    return (length == 0) ? null : this._children
  }

  descendants() {
    return d3.hierarchy(this).descendants()
      .map((d) => d.data)
  }

  links() {
    return d3.hierarchy(this).links().map(this._link)
  }

  eachBefore(callback) {
    return d3.hierarchy(this).eachBefore((d) => {
      callback(d.data)
    })
  }

  eachAfter(callback) {
    return d3.hierarchy(this).eachAfter((d) => {
      callback(d.data)
    })
  }

  _link(d) {
    return { source: d.source.data, target: d.target.data }
  }
}
