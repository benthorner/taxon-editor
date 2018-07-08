import {Node} from './modules/taxodes/edit/node.js'

export class Session extends Node {
  set(key, value) {
    super.set(key, value)

    var search = window.location.search
    var params = new URLSearchParams(search)

    params.set(key, value)
    window.history.replaceState({}, "", "?" + params)
  }
}
