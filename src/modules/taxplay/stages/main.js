import {ExitStage} from './exit.js'
import {EnterStage} from './enter.js'
import {UpdateStage} from './update.js'

export class MainStage {
  constructor(editor) {
    new ExitStage(editor)
    new EnterStage(editor)
    new UpdateStage(editor)

    this.editor = editor
    this.editor.on("all", this._all, this)
  }

  _all(name, args) {
    var pipe = ["beforeEnter", "onEnter", "afterEnter",
                "beforeExit", "onExit", "afterExit",
                "beforeUpdate", "onUpdate", "afterUpdate"]

    var index = pipe.indexOf(name)
    if (index < 0 || index == pipe.length-1) return
    this.editor.trigger(pipe[index+1], args)
  }
}
