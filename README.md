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

### Taxitor

The taxitor is designed as a bunch of plugins that do small pieces of work as part of the overall render pipeline, which has the following stages.

  * enter - add new elements to the DOM (new data)
  * exit - remove old elements from the DOM (old data)
  * layout - compute coordinates for all the elements
  * update - modify the element attributes (e.g. position)

If you look in the *layouts* and *handlers* directories, you'll see some examples of how the pipeline has been extended e.g. to color nodes by dept.

## Roadmap

There are lots of features to add to make the prototype better and showcase what is possible with these kinds of visualisations.

  * [taxitor] Drag support for nodes to change their parents
  * [taxitor] Drag support for nodes to merge them together
  * ~~[taxitor] Improve existing layouts and add better ones~~
  * [taxplay] Add a button to edit (and save) the taxon content
  * [taxplay] Show more of the properties for each taxon
  * [taxplay] Make the showing/editing of each property generic
  * [taxplay] Use generic properties to change phase / publish
  * ~~[generic] Use a javascript module library to require stuff~~
  * [taxitor] Show more details (e.g. phase) in each node
  * [taxitor] Support bulk actions for subtrees (e.g. publish)
  * [generic] Add authentication and authorisation capability

And much more - feel free to suggest some ideas. As some of the components are quite generic, it may also be good to extract them.
