export class ClearHandler {
  constructor(list) {
    this.list = list
    this.list.on("onClear", this.onClear, this)
  }

  onClear() {
    this.list.data = null
    this.list.trigger("beforeExit")
  }
}
