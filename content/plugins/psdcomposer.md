Bundle: 4

# PsdComposer

New in V3.1

Allows you to edit PSD files (hide/show layers, change text layer contents, apply certain effects), and render them to jpeg, gif, or png dynamically. Works as an IVirtualImageProvider, so you can post-process the composed result with any of the other plugins or commands.

Great for

* Dynamically generating clickable maps based on search results
* Generating customized product simulations where users can change multiple product variables independently, or enter text for engraving.


High performance - under 400ms for test psds with 40+ layers.

More documentation coming soon - in the meantime, please contact support@imageresizing.net with questions


## Installation

Either run `Install-Package ImageResizer.Plugins.PsdComposer` in the NuGet package manager, or:

1. Add ImageResizer.Plugins.PsdComposer.dll to your project
2. Add `<add name="PsdComposer" />` inside `<resizer><plugins></plugins></resizer>` in Web.config.

## Usage

Due to the complexity of the URL syntax, it's best to use the PsdCommandBuilder class to construct your URLs. 

You can hide & show layers, change layer colors, and change text layer contents through PsdCommandBuilder.

If the URLs generated by PsdCommandBuilder get too long, you can use a Pipeline.Rewrite handler to read URLs from a database based off a querystring key, and eliminate the issue. 

If this is over your head, email support@imageresizing.net and I can help you. 1 hour of my time ($95) is likely enough time to write the relevant code required for your PSD editing and composing needs. 