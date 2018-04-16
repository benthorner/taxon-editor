import {BaseLayout} from './base.js'

export class TreeLayout extends BaseLayout {
  constructor(editor) {
    super(editor)
  }

  call(root) {
    var bounds = this.bounds()
    d3.tree().size([bounds.width, bounds.height])(root)
  }
}
