export class Node {
  constructor(attributes) {
    this.attributes = attributes
  }

  get(key) {
    return this.attributes[key]
  }
}
