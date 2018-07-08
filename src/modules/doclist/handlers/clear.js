export class ClearHandler {
  constructor(list) {
    this.list = list
    this.list.on("onClear", this.onClear, this)
  }

  onClear() {
    this.list.element
      .selectAll(".doc")
      .remove()
  }
}
