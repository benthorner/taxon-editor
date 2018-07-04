export class ClickHandler {
  constructor(list) {
    this.list = list
    this.list.on("afterEnter", this.afterEnter, this)
  }

  afterEnter() {
    this.list.element
      .selectAll(".doc")
      .on("click", (d) => {
        window.open(d.url, "_blank")
      })
  }
}
