Taxode.Fake = function(parent) {
  _.extend(this, new Taxode.Base(parent))
  this.title = Math.random().toString(36).substring(5)
  this.id = this.title
}

Taxode.Fake.prototype.expand = function() {
  new Promise(function(resolve, reject) {
    this.children = [new Taxode.Fake(this),
                     new Taxode.Fake(this)]
    resolve()
  })
}
