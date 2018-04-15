import {BaseLayout} from './base.js'

export function TreeLayout(editor) {
  _.extend(this, new BaseLayout(editor))
}

TreeLayout.prototype.call = function(root) {
  var bounds = this.bounds()
  d3.tree().size([bounds.width, bounds.height])(root)
}
