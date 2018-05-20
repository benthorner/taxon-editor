import {FakeTaxode} from '../fake.js'
import {Link as EditLink} from '../edit/link.js'

export class Link extends EditLink {
  fetch() {
    this.taxode.children = [new FakeTaxode(this.taxode),
                            new FakeTaxode(this.taxode)]

    return Promise.resolve()
  }

  save() {
    return Promise.resolve()
  }
}
