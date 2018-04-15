export var Taxapis = {}

Taxapis.EXPANDED_LINKS_URL = "http://publishing-api.dev.gov.uk/v2/expanded-links/"
Taxapis.LINKS_URL = "http://publishing-api.dev.gov.uk/v2/links/"
Taxapis.CONTENT_URL = "http://publishing-api.dev.gov.uk/v2/content/"

Taxapis.expand = function(content_id) {
  return $.get(Taxapis.EXPANDED_LINKS_URL + content_id)
    .then((d) => Promise.resolve(d.expanded_links))
}

Taxapis.create = function(taxode) {
  var base_path = "/untitled-" + Math.random().toString(36).substring(5)
  var content_id = UUID.generate()

  var contentParams = { document_type: "taxon", publishing_app: "content-tagger",
                        rendering_app: "collections", schema_name: "taxon",
                        title: "Untitled", base_path: base_path, content_id: content_id,
                        routes: [{ path: base_path, type: "exact" }], details: {} }

  var linkParams = { }
  if (!taxode.parent) { linkParams.links = { root_taxon: [taxode.id] } }
  else { linkParams.links = { parent_taxons: [taxode.id] } }

  return $.post(Taxapis.CONTENT_URL + content_id, JSON.stringify(contentParams)).then(function() {
    return $.post(Taxapis.LINKS_URL + content_id, JSON.stringify(linkParams))
  }).then(() => {
    Promise.resolve(contentParams)
  })
}

Taxapis.delete = function(taxode) {
  if (!taxode.parent) return Promise.reject()

  params = { }
  if (!taxode.parent.parent) { params.links = { root_taxon: [] } }
  else { params.links = { parent_taxons: [] } }

  return $.post(Taxapis.LINKS_URL + taxode.id, JSON.stringify(params)).then(function() {
    return $.post(Taxapis.CONTENT_URL + taxode.id + "/discard-draft", JSON.stringify({ locale: "en" }))
  })
}
