import {LabelElement} from '../elements/label.js'

export class GOVUKSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new LabelElement(d, "title"),
            new LabelElement(d, "id"),
            new LabelElement(d, "base_path"),
            new LabelElement(d, "description")]
  }
}
