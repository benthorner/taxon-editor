import {BaseTaxdoc} from './base.js'
import {Config} from '../../config.js'

export class GOVUKTaxdoc extends BaseTaxdoc {
  get id() {
    return this.get("_id")
  }

  get url() {
    return Config.get("Taxdocs.GOVUKTaxdoc.baseURL") +
      this.get("link")
  }
}
