import {EnterStage} from './enter.js'
import {ExitStage} from './exit.js'
import {LayoutStage} from './layout.js'
import {UpdateStage} from './update.js'

export function MainStage(editor) {
  new EnterStage(editor)
  new ExitStage(editor)
  new LayoutStage(editor)
  new UpdateStage(editor)

  this.editor = editor
  editor.on("all", this._all, this)
}

MainStage.prototype._all = function(name, args) {
  var pipe = ["beforeEnter", "onEnter", "afterEnter",
              "beforeExit", "onExit", "afterExit",
              "beforeLayout", "onLayout", "afterLayout",
              "beforeUpdate", "onUpdate", "afterUpdate"]

  var index = pipe.indexOf(name)
  if (index < 0 || index == pipe.length-1) return
  this.editor.trigger(pipe[index+1], args)
}
