import {Docs as BaseDocs} from '../base/docs.js'
import {FakeTaxdoc} from '../../taxdocs/fake.js'

export class Docs extends BaseDocs {
  count() {
    return Promise.resolve(Math.floor(Math.random() * 10**6))
  }

  fetch() {
    var docs = Array.apply(null, { length: 10 })
    return Promise.resolve(docs.map(() => new FakeTaxdoc()))
  }
}
