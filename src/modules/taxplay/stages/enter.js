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
      .selectAll(".node")
      .data([this.editor.data], (d) => d.id)
      .enter()
      .append("div")
      .classed("node", true)
      .each(this._initNode.bind(this))
  }

  _initNode(d, i, nodes) {
    d3.select(nodes[i])
      .selectAll(".element")
      .data(this.schema.elements(d))
      .enter()
      .append("div")
      .classed("element", true)
      .each((d, i, nodes) => d.attach(nodes[i]))
  }
}
