import {Item} from '../../taxmenu/item.js'

export class DragMenu {
  constructor(editor) {
    this.editor = editor
  }

  items(dSubject, dObject) {
    var options = []

    if (!dObject.readonly && !dSubject.readonly) {
      if (dObject.children) {
        if (!dObject.children.includes(dSubject)) {
          options.push(new Item("Make child node", () => {
            dObject.link.adopt(dSubject).catch((e) => {
              this.editor.trigger("error", e)
            })
          }))
        }
      }
    }

    return options
  }
}
