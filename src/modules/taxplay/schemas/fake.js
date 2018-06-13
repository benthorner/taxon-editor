import {LabelElement} from '../elements/label.js'
import {TextBoxElement} from '../elements/textbox.js'
import {GroupElement} from '../elements/group.js'
import {ButtonElement} from '../elements/button.js'
import {RadioElement} from '../elements/radio.js'

export class FakeSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new TextBoxElement(d.node, "title"),
            new LabelElement(d.node, "id"),
            new TextBoxElement(d.node, "description"),
            new RadioElement(d.node, "phase", ["alpha", "beta", "live"]),
            new GroupElement("save", [
              new ButtonElement("Save", () => {
                this.editor.trigger("onSave", d)

              }),
              new ButtonElement("Reset", () => {
                this.editor.trigger("onReset")
              })
            ])]
  }
}
