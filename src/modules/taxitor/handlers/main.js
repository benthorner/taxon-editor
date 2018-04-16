import {DepthHandler} from './depth.js'
import {ExpandHandler} from './expand.js'
import {ContextHandler} from './context.js'
import {SelectHandler} from './select.js'
import {ZoomHandler} from './zoom.js'

export class MainHandler {
  constructor(editor) {
    new DepthHandler(editor)
    new ExpandHandler(editor)
    new ContextHandler(editor)
    new SelectHandler(editor)
    new ZoomHandler(editor)
  }
}
