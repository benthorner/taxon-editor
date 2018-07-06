import {DepthHandler} from './depth.js'
import {ExpandHandler} from './expand.js'
import {ContextHandler} from './context.js'
import {SelectHandler} from './select.js'
import {ZoomHandler} from './zoom.js'
import {ErrorHandler} from './error.js'
import {DragHandler} from './drag.js'
import {ClearHandler} from './clear.js'

export class MainHandler {
  constructor(editor) {
    new DepthHandler(editor)
    new ExpandHandler(editor)
    new ContextHandler(editor)
    new SelectHandler(editor)
    new ZoomHandler(editor)
    new ErrorHandler(editor)
    new DragHandler(editor)
  }
}
