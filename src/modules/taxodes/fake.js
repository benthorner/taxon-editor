Taxode.Fake = function(parent) {
  _.extend(this, new Taxode.Base(parent))
  this.id = Math.random()
  this.title = Math.random().toString(36).substring(5)
}

Taxode.Fake.prototype.expand = function() {
  this.children = [new Taxode.Fake(this),
                   new Taxode.Fake(this)]
}
