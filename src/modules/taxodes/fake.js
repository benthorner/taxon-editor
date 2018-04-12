import {BaseTaxode} from './base.js'

export function FakeTaxode(parent) {
  _.extend(this, new BaseTaxode(parent))
  this.title = Math.random().toString(36).substring(5)
  this.id = this.title
  this.description = Math.random().toString(36)
}

FakeTaxode.prototype.expand = function() {
  var that = this

  return new Promise(function(resolve, reject) {
    that.children = [new FakeTaxode(that),
                     new FakeTaxode(that)]
    resolve()
  })
}

FakeTaxode.prototype.contract = function() {
  var that = this
  that.children = null
  return Promise.resolve()
}

FakeTaxode.prototype.createChild = function() {
  if (!this.children) this.children = []
  var child = new FakeTaxode(this)
  this.children.push(child)
  return Promise.resolve(child)
}

FakeTaxode.prototype.delete = function() {
  var children = _.without(this.parent.children, this)
  this.parent.children = (children.length == 0) ? null : children
  return Promise.resolve()
}
