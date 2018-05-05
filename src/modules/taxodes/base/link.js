export class Link {
  constructor(node) {
    this.node = node
  }

  contract() {
    this.node.children = null
    return Promise.resolve()
  }
}
