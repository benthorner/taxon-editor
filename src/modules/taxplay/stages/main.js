import {UpdateStage} from './update.js'

export class MainStage {
  constructor(editor) {
    new UpdateStage(editor)

    this.editor = editor
    this.editor.on("all", this._all, this)
  }

  _all(name, args) {
    var pipe = ["beforeUpdate", "onUpdate", "afterUpdate"]

    var index = pipe.indexOf(name)
    if (index < 0 || index == pipe.length-1) return
    this.editor.trigger(pipe[index+1], args)
  }
}
