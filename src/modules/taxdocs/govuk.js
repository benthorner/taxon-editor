import {BaseTaxdoc} from './base.js'

export class GOVUKTaxdoc extends BaseTaxdoc {
  get id() {
    return this.get("_id")
  }

  get url() {
    return "https://www.gov.uk" + this.get("link")
  }
}
