import {BaseLayout} from './base.js'

export function TreeLayout(editor) {
  _.extend(this, new BaseLayout(editor))
}

TreeLayout.prototype.apply = function(root) {
  var that = this
  var bounds = this.bounds()

  d3.tree().size([bounds.width, bounds.height])(root)

  root.descendants().forEach(function(d) {
    d.width = that.nodeWidth; d.height = that.nodeHeight
  })
}
