export class ExitStage {
  constructor(list) {
    this.list = list
    this.list.on("onExit", this.onExit, this)
  }

  onExit() {
    this.list.element
      .selectAll(".doc")
      .data(this.list.data || [], (d) => d.id)
      .exit()
      .remove()
  }
}
