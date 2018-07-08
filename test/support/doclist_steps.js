var {Then} = require("cucumber")
var assert = require("assert")

Then("I should be on the google home page", async function () {
  await this.page.waitFor(500)

  var pages = await this.browser.pages()
  assert.equal(pages.length, 2)

  var pageURL = await pages[1].url()
  assert(pageURL.includes("google.com"))
})
