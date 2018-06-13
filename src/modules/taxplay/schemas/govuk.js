import {LabelElement} from '../elements/label.js'

export class GOVUKSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new LabelElement(d.node, "title"),
            new LabelElement(d.node, "id"),
            new LabelElement(d.node, "base_path"),
            new LabelElement(d.node, "description")]
  }
}
