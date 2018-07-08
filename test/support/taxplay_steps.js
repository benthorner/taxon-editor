var {Then} = require("cucumber")
var assert = require("assert")

Then("I should see the taxplay contains {string}", async function (text) {
  var element = await this.page.$("#taxplay")
  var handle = await element.getProperty("textContent")
  var content = await handle.jsonValue()
  assert(content.includes(text))
})
