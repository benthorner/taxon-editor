# taxonomy-editor

A prototype editor for the GOV.UK taxonomy.

![screenshot](https://raw.githubusercontent.com/benthorner/taxonomy-editor/master/screenshot.png)

## Background

The GOV.UK taxonomy is a hierarchy of topics ('taxons') used for tagging content. Examples include 'Defence' and 'HS2'. Each taxon is a type of document and all documents are managed using the [GOV.UK publishing-api](https://github.com/alphagov/publishing-api).

A taxonomy is a type of graph. The aim of this project is to explore different ways of visualising graphs like the GOV.UK taxonomy, as well as how to edit the taxons and manipulate the structure.

## Components

The prototype has several custom components. All of them use the Backbone.Events API to communicate between each other, as well as internally.

  * taxitor - this is the main component that visualises the graph
  * taxadio - a custom control for choosing an option (radio button)
  * taxmenu - a context (right-click) menu control used by the taxitor
  * taxodes - the hierarchical models used to represent the taxonomy
  * taxplay - a details view to show more properties of a tacode
  * taxapis - this is a helper to interface between taxodes and GOV.UK

### Taxitor

The taxitor is designed as a bunch of plugins that do small pieces of work as part of the overall render pipeline, which has the following stages.

  * enter - add new elements to the DOM (new data)
  * exit - remove old elements from the DOM (old data)
  * layout - compute coordinates for all the elements
  * update - modify the element attributes (e.g. position)

If you look in the *layouts* and *handlers* directories, you'll see some examples of how the pipeline has been extended e.g. to color nodes by dept.

### Taxapis

I had several issues using the GOV.UK publishing-api with a frontend-only app. To make progress I decided to make a few local changes.

```
diff --git a/config/application.rb b/config/application.rb
index 019ed9a..080fbe4 100644
--- a/config/application.rb
+++ b/config/application.rb
@@ -41,5 +41,11 @@ module PublishingAPI
     )

     config.debug_exception_response_format = :api
+
+    config.action_dispatch.default_headers = {
+      'Access-Control-Allow-Origin' => '*',
+      'Access-Control-Allow-Methods' => "POST, GET, OPTIONS, PUT",
+      'Access-Control-Allow-Headers' => '*'
+    }
   end
 end
diff --git a/config/routes.rb b/config/routes.rb
index c09607f..3723638 100644
--- a/config/routes.rb
+++ b/config/routes.rb
@@ -15,7 +15,7 @@ Rails.application.routes.draw do
     namespace :v2 do
       get "/content", to: "content_items#index"
       scope constraints: method(:content_id_constraint) do
-        put "/content/:content_id", to: "content_items#put_content"
+        post "/content/:content_id", to: "content_items#put_content"
         get "/content/:content_id", to: "content_items#show"
         post "/content/:content_id/publish", to: "content_items#publish"
         post "/content/:content_id/unpublish", to: "content_items#unpublish"
@@ -24,7 +24,7 @@ Rails.application.routes.draw do

         get "/links/:content_id", to: "link_sets#get_links"
         get "/expanded-links/:content_id", to: "link_sets#expanded_links"
-        patch "/links/:content_id", to: "link_sets#patch_links"
+        post "/links/:content_id", to: "link_sets#patch_links"
         # put is provided for backwards compatibility.
         put "/links/:content_id", to: "link_sets#patch_links"
         get "/linked/:content_id", to: "link_sets#get_linked"
```

## Roadmap

There are lots of features to add to make the prototype better and showcase what is possible with these kinds of visualisations.

  * [taxitor] Drag support for nodes to change their parents
  * [taxitor] Drag support for nodes to merge them together
  * [taxplay] Add a button to edit (and save) the taxon content
  * [taxplay] Show more of the properties for each taxon
  * [taxplay] Make the showing/editing of each property generic
  * [taxplay] Use generic properties to change phase / publish
  * [generic] Replace the hacky header/footer with the real one
  * [generic] Use a javascript module library to require stuff
  * [taxapis] Work out how to use the publishing-api as-is
  * [taxitor] Show more details (e.g. phase) in each node
  * [taxitor] Support bulk actions for subtrees (e.g. publish)
  * [generic] Add authentication and authorisation capability

And much more - feel free to suggest some ideas. As some of the components are quite generic, it may also be good to extract them.
