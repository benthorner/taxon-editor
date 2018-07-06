var {When, Then} = require("cucumber")
var assert = require("assert")

When("I click on the {string} {word} button", async function (text, _word) {
  var elements = await this.page.$x(`//*[contains(text(), '${text}')]`)
  await elements[0].click()
})

When("I click on the {int}{word} {word}", async function (number, _word, klass) {
  var elements = await this.page.$$(`.${klass}`)
  await elements[number-1].click()
})

When("I set the {word} field to {string}", async function (id, value) {
  var element = await this.page.$(`input#${id}`)
  await element.type(value)
  await element.press("Enter")
})

Then("I should see the {word} contains {string}", async function (id, text) {
  var element = await this.page.$(`#${id}`)
  var handle = await element.getProperty("textContent")
  var content = await handle.jsonValue()
  assert(content.includes(text))
})

Then("I should see the {word} field contains {string}", async function (id, text) {
  var element = await this.page.$(`input#${id}`)
  var handle = await element.getProperty("value")
  var content = await handle.jsonValue()
  assert(content.includes(text))
})

Then("I should see the {int}{word} {word} contains {string}", async function (number, _word, klass, text) {
  var elements = await this.page.$$(`.${klass}`)
  var handle = await elements[number-1].getProperty("textContent")
  var content = await handle.jsonValue()
  assert(content.includes(text))
})

Then("I should see a {word} with {int} {word}s", async function (id, count, klass) {
  var elements = await this.page.$$(`#${id} .${klass}`)
  assert.equal(elements.length, count)
})

Then("I should not see a {word}", async function (id) {
  var elements = await this.page.$$(`#${id}`)
  assert.equal(elements.length, 0)
})

Then("I should be on the {string} page", async function (url) {
  await this.page.waitFor(500)

  var pages = await this.browser.pages()
  assert.equal(pages.length, 2)

  var pageURL = await pages[1].url()
  assert(pageURL.includes(url))
})
