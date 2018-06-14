import {FakeSchema} from '../schemas/fake.js'

export class EnterStage {
  constructor(editor) {
    this.editor = editor
    this.schema = new FakeSchema(editor)
    this.editor.on("onEnter", this.onEnter, this)
    this.editor.on("schemaSelected", this.schemaSelected, this)
  }

  schemaSelected(d) {
    this.schema = d
  }

  onEnter() {
    this.editor.element
      .selectAll("*")
      .remove()

    this.editor.element
      .selectAll(".element")
      .data(this.schema.elements(this.editor.data))
      .enter()
      .append("div")
      .classed("element", true)
      .each((d, i, nodes) => d.attach(nodes[i]))
  }
}
