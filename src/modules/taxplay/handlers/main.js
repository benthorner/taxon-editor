import {EditHandler} from './edit.js'
import {ErrorHandler} from './error.js'

export class MainHandler {
  constructor(editor) {
    new EditHandler(editor)
    new ErrorHandler(editor)
  }
}
