import {Docs as BaseDocs} from '../base/docs.js'
import {FakeTaxdoc} from '../../taxdocs/fake.js'

export class Docs extends BaseDocs {
  count() {
    var result = "count-" + Math.floor(Math.random() * 10**6)
    return Promise.resolve(result)
  }

  fetch() {
    var docs = Array.apply(null, { length: 10 })
    return Promise.resolve(docs.map(() => new FakeTaxdoc()))
  }
}
