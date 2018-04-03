Taxitor.Size = function(events, element) {
  $(window).resize(function() { events.trigger("draw") })
}
