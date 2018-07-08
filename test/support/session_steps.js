var {When, Then} = require("cucumber")
var assert = require("assert")

When("I load the page with query {string}", async function(text) {
  await this.page.goto("http://localhost:8080?" + text)
  var url2 = await this.page.url()
})

Then("I should see the URL contains {string}", async function(text) {
  var url = await this.page.url()
  assert(url.includes(text))
})

Then("I should see the {string} layout is selected", async function(text) {
  var layout = await this.page.$("#layout-taxadio .selected")
  var layoutHandle = await layout.getProperty("textContent")
  var layoutText = await layoutHandle.jsonValue()
  assert.equal(layoutText, text)
})

Then("I should see the {string} source is selected", async function(text) {
  var layout = await this.page.$("#source-taxadio .selected")
  var layoutHandle = await layout.getProperty("textContent")
  var layoutText = await layoutHandle.jsonValue()
  assert.equal(layoutText, text)
})
