export function BaseTaxode(parent) {
  this.parent = parent
  this.depth = parent ? parent.depth + 1 : 0
}

BaseTaxode.prototype.descendants = function() {
  return d3.hierarchy(this).descendants()
    .map((d) => d.data)
}

BaseTaxode.prototype.links = function() {
  return d3.hierarchy(this).links().map(this._link)
}

BaseTaxode.prototype.eachBefore = function(callback) {
  return d3.hierarchy(this).eachBefore((d) => {
    callback(d.data)
  })
}

BaseTaxode.prototype._link = function(d) {
  return { source: d.source.data, target: d.target.data }
}
