import {LabelElement} from '../elements/label.js'

export class FakeSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new LabelElement(d, "title"),
            new LabelElement(d, "id"),
            new LabelElement(d, "description")]
  }
}
