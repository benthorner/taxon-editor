import {BaseTaxode} from './base.js'

export function FakeTaxode(parent) {
  _.extend(this, new BaseTaxode(parent))
  this.title = Math.random().toString(36).substring(5)
  this.description = Math.random().toString(36)
  this.id = this.title
}

FakeTaxode.prototype.expand = function() {
  this.children = [new FakeTaxode(this),
                   new FakeTaxode(this)]

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
