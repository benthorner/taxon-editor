# taxonomy-explorer

A prototype editor for the [GOV.UK taxonomy](https://insidegovuk.blog.gov.uk/2015/11/02/developing-a-subject-based-taxonomy-for-gov-uk/).

![screenshot](https://raw.githubusercontent.com/benthorner/taxonomy-editor/master/screenshot.png)

## Prequisites

You will need the following prerequisites installed locally.

  * [npm](https://www.npmjs.com/) to manage the dev dependencies
  * [npx](https://www.npmjs.com/package/npx) to run npx binaries

Most of these can be installed using Homebrew on Mac.

### Getting Started

Run the following command in the top level directory.

```
npm install
npx http-server -c-1
npx cucumber-js tes
```

Then go to `http://localhost:8080` in your browser.

## Components

The prototype has several custom components. All of them use the Backbone.Events API to communicate between each other, as well as internally.

  * taxitor - this is the main component that visualises the graph
  * taxeles - a set of controls for display and use in edit forms
  * taxmenu - a context (right-click) menu control used by the taxitor
  * taxodes - the hierarchical models used to represent the taxonomy
  * taxplay - a details view to show more properties of a tacode
  * taxdocs - the flat models used to represent an item of content
  * doclist - a list view for a collection of taxdocs under a taxode

### Taxitor

The taxitor is designed as a bunch of plugins that do small pieces of work as part of the overall render pipeline, which has the following stages.

  * enter - add new elements to the DOM (new data)
  * exit - remove old elements from the DOM (old data)
  * layout - compute coordinates for all the elements
  * update - modify the element attributes (e.g. position)

If you look in the *layouts* and *handlers* directories, you'll see some examples of how the pipeline has been extended e.g. to color nodes by dept.

## Roadmap

There are lots of features to add to make the prototype better and showcase what is possible with these kinds of visualisations.

  * ~~[taxitor] Drag support for nodes to change their parents~~
  * ~~[taxitor] Improve existing layouts and add better ones~~
  * ~~[taxplay] Add a button to edit (and save) the taxon content~~
  * ~~[taxplay] Show more of the properties for each taxon~~
  * ~~[taxplay] Make the showing/editing of each property generic~~
  * ~~[taxplay] Use generic properties to change phase / publish~~
  * ~~[generic] Use a javascript module library to require stuff~~
  * ~~[taxitor] Show more details (e.g. phase) in each node~~
  * ~~[generic] Add feature tests to check each component works~~
  * [generic] Loom into packaging to distribute components

And much more - feel free to suggest some ideas. As some of the components are quite generic, it may also be good to extract them.
