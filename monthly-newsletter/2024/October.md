Welcome to the October 2024 edition of the monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework 0.9.9.0 and preparing for 1.0
Work on release 0.9.9.0 has started. It's headline feature is the 1.0 release of the 
[UntitledFontUtils](https://github.com/MadLadSquad/UntitledFontUtils) library, which powers the fonts submodule of the OS module.

Additionally, much of the feature set for 1.0 is done, except for some annoying bugs that are hard to debug and some other small features.

### UntitledFontUtils 1.0
The long-awaited [UntitledFontUtils](https://github.com/MadLadSquad/UntitledFontUtils) library is finally ready for 1.0 for the 0.9.9.0
release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework).

It adds support for fetching default system fonts in a cross-platform manner.

### UntitledLog 5.0
The 5.0 release of the [UntitledLog](https://github.com/MadLadSquad/UntitledLog) library adds a limited C logging API and a C API for
the dear imgui widget, among other small changes.

This release is breaking, because it finally renames the `UVKLog` files to `UntitledLog`.

### cimgui_extra 2.0
In the 2.0 release of the [cimgui_extra](https://github.com/MadLadSquad/cimgui_extra) library, we added support for the popular 
[imspinner](https://github.com/dalerank/imspinner) library.

### Wayland support
Wayland support for the platform functions of the Window interface in the 
[UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) is finally coming with release v0.9.9.0.

### Framework desktop packaging
Many may know that from around framework version 0.8.8.0, the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework)
and all applications written on top of it have been packaged for Gentoo and Funtoo Linux on under the 
[UntitledDesktopOverlay repository](https://github.com/MadLadSquad/UntitledDesktopOverlay).

Because this is one of the last parts in the development of the first stable version of the 
[UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework), this we decided to start work on creating additional
packages for other packaging formats. We plan on supporting the following:

1. DEBs - Debian-based Linux distributions
1. RPMs - RHEL/Fedora-based Linux distributions
1. PKGBUILDs - Arch-based Linux distributions
1. Void package templates - Void Linux
1. Flatpaks - Cross-platform on all Linux distributions
1. Homebrew formulae - macOS and Linux

## MadLadSquad
Nick has started working on the MadLadSquad account system and unified backend, which would allow us to add cloud functionality to many of
our future web services.

## Tiny.lol
We're finally starting work on <tiny.lol> again after more than 7 months of inactivity. Work has stated on both the frontend and backend

## Youyin
Plans for restarting work on the Youyin backend are starting to be drawn.
