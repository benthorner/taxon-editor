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
