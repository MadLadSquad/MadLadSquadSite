Welcome to the August 2025 edition of the monthly newsletter!

## UntitledDesktop
### UntitledImGuiFramework
Release 2.0 is live bringing in a number of improvements, including:

1. Moving to SDL3 as our new windowing library, which includes the following:
   - True IME support in dear imgui
   - WASM clipboard and IME support
   - Better Wayland support
   - An almost complete rewrite of the window interface with many improvements to existing functions
   - Better OS drag-drop events
   - Better clipboard
   - A more uniform API
   - A complete input and keybinding API change
   - Better HiDPI support on WASM
   - Better font rendering on WASM
1. Cleaner CMake configuration
1. Packages for debian/ubuntu hosted at <https://debs.madladsquad.com>
1. Many more smaller improvements

### pkggen
Development of pkggen is starting this month.

### UntitledDBusUtils 2.0
We fixed a number of issues with [UntitledDBusUtils](https://github.com/MadLadSquad/UntitledDBusUtils), including incorrect
serialisation and deserialisation of certain data structures.

Some small breaking changes were introduced, but adaptation should be easy for the most part.

## MadLadSquad / Heapforge
### MadLadSquad
Since version 2.0 of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) 99% of the features we expect the framework to have are now provided, therefore, the
UntitledDesktop project is going to be in maintenance mode until new features or applications are needed by us or by our users. This should not be interpreted as us stopping or sunsetting
support for our projects, but rather as a sign of the current projects being feature-complete and needing little improvements in terms of their current scope.

Development will be shifting mainly to pkggen, which we expect to take around a year to get to a 1.0 release. This also includues a rewrite of our current desktop package deployment
infrastructure.

We're also planning on updating the design for the MadLadSquad website to make it more approachable for visitors

### Heapforge
Development at Heapforge is now centering around the following projects starting from the 31st of August:

1. A 1.0 youyin upgrade and rename - middle of 2026
   - Includes a much expanded character database
   - More intuitive UI
   - Cloud sync
   - An accounts and leaderboard system
   - Multiple gamification systems(such as streak counters, collectible badges and leaderboard flags)
1. Parallel to the youyin upgrade we're starting development of Schrift Studio - a tool for professional font editing
1. Tiny.lol is going to be starting development again with a 1.0 release being planned by the middle of 2026
1. The heapforge website - December 31st
