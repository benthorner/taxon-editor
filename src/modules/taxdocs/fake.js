import {BaseTaxdoc} from './base.js'

export class FakeTaxdoc extends BaseTaxdoc {
  constructor() {
    super({
      title: Math.random().toString(36).substring(5),
      description: Math.random().toString(36),
      id: Math.random().toString(36).substring(5)
    })
  }

  get id() {
    return this.get("id")
  }

  get url() {
    return "http://google.com"
  }
}
