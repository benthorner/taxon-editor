import {LabelTaxele} from '../../taxeles/label.js'
import {ButtonTaxele} from '../../taxeles/button.js'

export class GOVUKSchema {
  constructor(editor) {
    this.editor = editor
  }

  elements(d) {
    return [new LabelTaxele("content_id", d.node),
            new LabelTaxele("title", d.node),
            new LabelTaxele("base_path", d.node),
            new LabelTaxele("description", d.node),
            new ButtonTaxele("View on GOV.UK", () => {
              window.open(d.url, "_blank")
            })]
  }
}
