Welcome to the May 2024 monthly newsletter.

## UntitledDesktop
### UntitledImGuiFramework 0.8.7.9, 0.8.8.0, 0.8.9.0 and 0.9.0.0
These releases include the following changes:

1. Better production export
1. Gentoo/Funtoo packages for the UntitledImGuiFramework and base libraries for it
1. Shipping UntitledOpen 1.0
1. Shipping UntitledDBusUtils 1.0
1. New client-side bar
1. Better config installation code on Unix-based platforms
1. Updates to the C API
1. Added additional comments to most libraries
1. Removed irrelevant files
1. Removed references to removed modules
1. Added arithmetic operators to `FVector` types
1. UntitledImGuiTheme now supports semantic colours
1. Better error handling
1. Better install experience on Windows
1. Multiple optimisations to UntitledI18N

### Starting work on version 1.0 of the UntitledImGuiFramework
In June, July and August we'll start work on the 1.0 release of the UntitledImGuiFramework. This release will include the following:

1. Stable API and ABI
1. Stable CMakeLists.txt generation
1. Plugin support
1. UntitledFontUtils 1.0
1. UntitledDBusUtils 1.0
1. Vulkan renderer

### UntitledOpen 1.0
The [UntitledOpen](https://github.com/MadLadSquad/UntitledOpen) library can now open URIs on Linux using XDG Desktop Portals.

### UntitledDBusUtils 0.5
Version 0.5 of the [UntitledDBusUtils](https://github.com/MadLadSquad/UntitledDBusUtils) library finally provides a type- and mermory-safe
interface for appending complex data structures to DBus messages.

Previously, one could only append basic datatypes, arrays of basic datatypes and dictionaries of basic datatypes through a type- and memory-safe interface.
Now, one can push everything from a basic type, to a type like this: `a(iiia{sv})` where the variant type can have a type signature like `(iba{sv}i)`.

### Starting work on UntitledDBusUtils 1.0
Of course, we want to fully finish UntitledDBusUtils, so we're starting work on a type- and memory-safe wrapper on top of the deserialisation interface,
provided by the `dbus-1` low level C interface.

### UntitledDesktopOverlay
Following the improvements in UntitledImGuiFramework 0.8.7.9, all MadLadSquad applications and libraries can be found as Funtoo &
Gentoo packages under the [UntitledDesktopOverlay](https://github.com/MadLadSquad/UntitledDesktopOverlay). Funtoo users have
access to YAML and python autogens for all the packages in the overlay.

Other package managers will get support soon.

## Multilingual
### Funtoo Linux multilingual project
Multiple issues relating to the multilingual tracker issue have been fixed. These include:

1. Creation of IME backend profiles
1. Fixing m17n-lib
1. Moving ibus to i18n-kit

### Youyin character editor
Work on the Youyin character editor continues. It includes the ability to zoom in and pan the character, reset view hotkeys
and more.

### UntitledI18N 1.3.0.0
The new version of [UntitledI18N](https://github.com/MadLadSquad/UntitledI18N) includes the following:
1. Removed unnecessary code
1. Replaced instances of `std::unordered_map` with [parallel-hashmap](https://github.com/greg7mdp/parallel-hashmap), which should provide an up to 10X speedup in performance
