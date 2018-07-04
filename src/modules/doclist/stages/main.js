import {EnterStage} from './enter.js'
import {ExitStage} from './exit.js'
import {UpdateStage} from './update.js'

export class MainStage {
  constructor(list) {
    new ExitStage(list)
    new EnterStage(list)
    new UpdateStage(list)

    this.list = list
    list.on("all", this._all, this)
  }

  _all(name, args) {
    var pipe = ["beforeExit", "onExit", "afterExit",
                "beforeEnter", "onEnter", "afterEnter",
                "beforeUpdate", "onUpdate", "afterUpdate"]

    var index = pipe.indexOf(name)
    if (index < 0 || index == pipe.length-1) return
    this.list.trigger(pipe[index+1], args)
  }
}
