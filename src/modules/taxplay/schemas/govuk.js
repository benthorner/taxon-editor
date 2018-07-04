import {LabelTaxele} from '../../taxeles/label.js'
import {ButtonTaxele} from '../../taxeles/button.js'

export class GOVUKSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new LabelTaxele(d.node, "content_id"),
            new LabelTaxele(d.node, "title"),
            new LabelTaxele(d.node, "base_path"),
            new LabelTaxele(d.node, "description"),
            new ButtonTaxele("View on GOV.UK", () => {
              window.open(d.url, "_blank")
            })]
  }
}
