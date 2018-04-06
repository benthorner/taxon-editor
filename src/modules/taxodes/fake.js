Taxode.Fake = function(parent) {
  _.extend(this, new Taxode.Base(parent))
  this.title = Math.random().toString(36).substring(5)
  this.id = this.title
  this.description = Math.random().toString(36)
}

Taxode.Fake.prototype.expand = function() {
  var that = this

  return new Promise(function(resolve, reject) {
    that.children = [new Taxode.Fake(that),
                     new Taxode.Fake(that)]
    resolve()
  })
}

Taxode.Fake.prototype.contract = function() {
  var that = this
  that.children = null
  return Promise.resolve()
}

Taxode.Fake.prototype.createChild = function() {
  if (!this.children) this.children = []
  var child = new Taxode.Fake(this)
  this.children.push(child)
  return Promise.resolve(child)
}

Taxode.Fake.prototype.delete = function() {
  var children = _.without(this.parent.children, this)
  this.parent.children = (children.length == 0) ? null : children
  return Promise.resolve()
}
