var puppeteer = require("puppeteer")
var assert = require("assert")
var _ = require("lodash")
var {When, Then} = require("cucumber")

When("I double click on the {int}{word} level {int} node", async function (number, _word, level) {
  await this.page.waitFor(`.node.depth${level}`)

  await this.page.evaluate(function (number, level) {
    var evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent('dblclick', true, true, window);
    $(`.node.depth${level}`)[number-1].dispatchEvent(evObj);
  }, number, level)
})

When("I click on the {int}{word} level {int} node", async function (number, _word, level) {
  await this.page.waitFor(`.node.depth${level}`)

  await this.page.evaluate(function (number, level) {
    var evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent('click', true, true, window);
    $(`.node.depth${level}`)[number-1].dispatchEvent(evObj);
  }, number, level)
})

When("I right click on the {int}{word} level {int} node", async function (number, _word, level) {
  await this.page.waitFor(`.node.depth${level}`)

  await this.page.evaluate(function (number, level) {
    var evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent('contextmenu', true, true, window);
    $(`.node.depth${level}`)[number-1].dispatchEvent(evObj);
  }, number, level)
})

When("I drag a level {int} node over a level {int} node", async function (childLevel, parentLevel) {
  await this.page.waitFor(`.node.depth${childLevel}`)

  var childBox = await this.page.evaluate(function (level) {
    return $(`.node.depth${level}`).first().offset()

  }, childLevel)

  var parentBox = await this.page.evaluate(function (level) {
    return $(`.node.depth${level}`).first().offset()

  }, parentLevel)

  await this.page.mouse.move(childBox.left+1, childBox.top+1)
  await this.page.mouse.down()
  await this.page.mouse.move(parentBox.left+1, parentBox.top+1)
  await this.page.mouse.up()
})

Then("I should see {int} lines of nodes", async function (count) {
  await this.page.waitFor(200)

  var boxes = await this.page.evaluate(function () {
    return $(".node").toArray().map((node) => $(node).position())
  })

  var lines = _.groupBy(boxes, function (box) { return box.top })
  assert.equal(_.keys(lines).length, count)
})

Then("I should see {int} nodes on line {int}", async function (count, line) {
  var boxes = await this.page.evaluate(function () {
    return $(".node").toArray().map((node) => $(node).position())
  })

  var lines = _.groupBy(boxes, function (box) { return box.top })
  var keys = _.keys(lines).sort()
  assert.equal(lines[keys[line]].length, count)
})

Then("I should see {int} level {int} nodes", async function (count, level) {
  if (count > 0) {
    await this.page.waitFor(`.node.depth${level}`)
  }

  var nodes = await this.page.$$(`.node.depth${level}`)
  assert.equal(nodes.length, count)
})
