import {LabelTaxele} from '../../taxeles/label.js'
import {TextBoxTaxele} from '../../taxeles/textbox.js'
import {GroupTaxele} from '../../taxeles/group.js'
import {ButtonTaxele} from '../../taxeles/button.js'

export class FakeSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new LabelTaxele("id", d.node),
            new TextBoxTaxele("title", d.node),
            new TextBoxTaxele("description", d.node),
            new GroupTaxele("save", [
              new ButtonTaxele("Save", () => {
                this.editor.trigger("onSave", d)

              }),
              new ButtonTaxele("Reset", () => {
                this.editor.trigger("onReset")
              })
            ])]
  }
}
