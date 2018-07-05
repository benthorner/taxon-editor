var puppeteer = require("puppeteer")
var {Before, After} = require("cucumber")

Before(async function () {
  this.browser = await puppeteer.launch()
  this.page = await this.browser.newPage()
  await this.page.goto("http://localhost:8080")
})

After(function () {
  this.browser.close()
})
