import {FakeSchema} from "../schemas/fake.js"

export class UpdateStage {
  constructor(editor) {
    this.editor = editor
    this.schema = new FakeSchema(editor)

    this.editor.on("onUpdate", this.onUpdate, this)
    this.editor.on("schemaSelected", this.schemaSelected, this)
  }

  schemaSelected(d) {
    this.schema = d
  }

  onUpdate() {
    this.editor.element
      .selectAll("*")
      .remove()

    for (var element of this.schema.elements(this.editor.data)) {
      element.attach(this.editor.element.node())
    }
  }
}
