
Taxode.Real = function(taxon, parent) {
  _.extend(this, new Taxode.Base(parent))
  _.extend(this, taxon)
  this.id = this.content_id
}

Taxode.Real.root = new Taxode.Real({
  content_id: "f3bbdec2-0e62-4520-a7fd-6ffd5d36e03a",
  title: "GOV.UK",
  base_path: "/",
  description: "The root of the taxonomy."
})

Taxode.Real.prototype.expand = function() {
  var that = this

  return Taxapis.expand(that.id).then(function(d) {
    var links = d.level_one_taxons || d.child_taxons

    if (links) {
      that.children = links.map(function(d2) {
        return new Taxode.Real(d2, that)
      })
    }

    return Promise.resolve(d)
  })
}

Taxode.Real.prototype.contract = function() {
  var that = this
  that.children = null
  return Promise.resolve()
}

Taxode.Real.prototype.createChild = function() {
  var that = this

  return Taxapis.create(that).then(function(taxon) {
    if (!that.children) that.children = []
    var child = new Taxode.Real(taxon, that)
    that.children.push(child)
    return Promise.resolve(child)
  })
}

Taxode.Real.prototype.delete = function() {
  var that = this

  return Taxapis.delete(that).then(function() {
    var children = _.without(that.parent.children, that)
    that.parent.children = (children.length == 0) ? null : children
    return Promise.resolve()
  })
}
