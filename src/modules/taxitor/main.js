function Taxitor(element) {
  var element = d3.select(element)
  var events = {}

  _.extend(events, Backbone.Events)

  new Taxitor.Tree(events, element)
  new Taxitor.Drag(events, element)
  new Taxitor.Hide(events, element)
  new Taxitor.Size(events, element)

  var data = {
    name: "foo bar woo war", children: [
      { name: "bar" },
      { name: "woo" }
    ]
  }

  events.trigger("data", data)
  events.trigger("draw")
}
