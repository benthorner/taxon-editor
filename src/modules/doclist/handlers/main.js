import {ClickHandler} from './click.js'
import {ClearHandler} from './clear.js'

export class MainHandler {
  constructor(list) {
    new ClickHandler(list)
    new ClearHandler(list)
  }
}
