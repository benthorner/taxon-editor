export class EnterStage {
  constructor(list) {
    this.list = list
    this.list.on("onEnter", this.onEnter, this)
  }

  onEnter() {
    this.list.element
      .selectAll(".doc")
      .data(this.list.data || [], (d) => d.id)
      .enter()
      .append("div")
      .classed("doc", true)
  }
}
