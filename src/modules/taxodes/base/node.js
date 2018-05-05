export class Node {
  constructor(node) {
    this.node = node
  }

  save() {
    return Promise.reject("Not supported")
  }

  delete() {
    return Promise.reject("Not supported")
  }
}
