import {FakeSchema} from "../schemas/fake.js"

export class UpdateStage {
  constructor(editor) {
    this.editor = editor
    this.schema = new FakeSchema(editor)

    this.editor.on("onUpdate", this.onUpdate, this)
    this.editor.on("onSelectSchema", this.onSelectSchema, this)
  }

  onSelectSchema(d) {
    this.schema = d
  }

  onUpdate() {
    this.editor.element.selectAll("*").remove()
    if (this.editor.data == undefined) return

    for (var element of this.schema.elements(this.editor.data)) {
      element.attach(this.editor.element.node())
    }
  }
}
