import {BaseLayout} from './base.js'

export class RadialLayout extends BaseLayout {
  constructor(editor) {
    super(editor)
  }

  call(root) {
    d3.tree().size([2*Math.PI, this.bounds().height])(root)

    root.descendants().forEach((d) => {
      var radius = d.y
      var angle = d.x

      d.x = radius * Math.cos(angle)
      d.y = radius * Math.sin(angle)
    })
  }
}
