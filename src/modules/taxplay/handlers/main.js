import {EditHandler} from './edit.js'
import {ErrorHandler} from './error.js'
import {ClearHandler} from './clear.js'

export class MainHandler {
  constructor(editor) {
    new EditHandler(editor)
    new ErrorHandler(editor)
    new ClearHandler(editor)
  }
}
