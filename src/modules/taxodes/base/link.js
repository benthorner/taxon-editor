export class Link {
  constructor(node) {
    this.node = node
  }

  reset() {
    this.node.children = null
  }

  fetch() {
    return Promise.reject("Not supported")
  }

  save() {
    return Promise.reject("Not supported")
  }

  remove(node) {
    var children = this.node.children
    this.node.children = _.without(children, node)
    node.parent = null
  }

  create(node) {
    this.add(node)
    return this.save()
  }

  delete() {
    var parent = this.node.parent
    parent.link.remove(this.node)
    return parent.link.save()
  }

  add(node) {
    node.parent = this.node
    this.node.children.push(node)
  }
}
