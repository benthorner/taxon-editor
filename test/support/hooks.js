var puppeteer = require("puppeteer")
var {Before, After} = require("cucumber")

Before(async function () {
  this.browser = await puppeteer.launch()
  var pages = await this.browser.pages()

  this.page = pages[0]
  await this.page.goto("http://localhost:8080")
  await this.page.evaluate(() => ENV = "test")
})

After(function () {
  this.browser.close()
})
