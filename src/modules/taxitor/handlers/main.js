import {DepthHandler} from './depth.js'
import {ExpandHandler} from './expand.js'
import {MenuHandler} from './menu.js'
import {SelectHandler} from './select.js'
import {ZoomHandler} from './zoom.js'

export function MainHandler(editor) {
  new DepthHandler(editor)
  new ExpandHandler(editor)
  new MenuHandler(editor)
  new SelectHandler(editor)
  new ZoomHandler(editor)
}
