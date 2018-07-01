import {Docs as BaseDocs} from '../base/docs.js'

export class Docs extends BaseDocs {
  count() {
    return Promise.resolve(Math.floor(Math.random() * 10**6))
  }
}
