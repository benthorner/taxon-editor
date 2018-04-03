Taxode.Base = function(parent) {
  this.parent = parent
  this.depth = parent ? parent.depth + 1 : 0
}

Taxode.Base.prototype.descendants = function() {
  return d3.hierarchy(this).descendants()
    .map(function(d) { return d.data })
}

Taxode.Base.prototype.links = function() {
  return d3.hierarchy(this).links().map(this._link)
}

Taxode.Base.prototype.eachBefore = function(callback) {
  return d3.hierarchy(this).eachBefore(function(d) {
    callback(d.data)
  })
}

Taxode.Base.prototype._link = function(d) {
  return { source: d.source.data, target: d.target.data }
}
