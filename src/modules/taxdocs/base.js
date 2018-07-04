export class BaseTaxdoc {
  constructor(taxdoc) {
    this.taxdoc = taxdoc
  }

  get(key) {
    return this.taxdoc[key]
  }
}
