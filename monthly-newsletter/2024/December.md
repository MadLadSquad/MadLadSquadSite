Welcome to the December 2024 monthly newsletter.

## Heapforge and MadLadSquad
Stanislav and Nick, have decided to change the way MadLadSquad is internally organised. The result of this is creating a new entity called
Heapforge.

Heapforge is our new organisation that will deal with the development of closed-source, or source-available commercial projects. MadLadSquad
will remain as is, with the same development team, and the same focus on open source.

What changes from now on:

1. Heapforge takes ownership of all future commercial projects
1. Heapforge takes ownership of the future backends for the following projects:
   - Youyin
   - Tiny.lol
   - Bulgar3D
   - The generic backend that links these services into a single user account
1. MadLadSquad takes ownership over all current and future open sources projects
1. MadLadSquad takes ownership over all current and future forks of open sources projects
1. MadLadSquad keeps ownership over the following:
   - Youyin's frontend
   - Youyin's character databases
   - Its website, brand, logo
   - Modus Mio BG, its brand, pages and logo

The split was mainly needed for administrative reasons, it does not really affect most of our current projects. Funding amount for MadLadSquad
will remain the same for the foreseeable future.

## UntitledDesktop
### Preparing the UntitledImGuiFramework for 1.0
In the November edition of the monthly newsletter, we noted that we're preparing for the 1.0 release of the UntitledImGuiFramework.
Unfortunately, due to unforeseen disruptions, we're delaying the release until the end of January 2025.

These disruptions are mainly, due to real life disruptions that limit the time our main developers can spend on the project, though that's not
the whole picture. In reality, features we were not anticipating have made their way to the 1.0 release date. These are the new features for
0.9.0.0 and 1.0.0.0:

1. Release 0.9.0.0:
   - Directory-independent [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool)(makes packaging the framework easier)
   - Desktop packaging
1. Release 1.0.0.0:
   - [UntitledFontUtils](https://github.com/MadLadSquad/UntitledFontUtils) 1.0
   - Fixing critical issues with [UntitledDBusUtils](https://github.com/MadLadSquad/UntitledDBusUtils)
   - Trying to port the [UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager) to Wayland and including updates that result from it.
   - Porting [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting) to Wayland
   - Porting [UDESessionLogout](https://github.com/MadLadSquad/UntitledIBusHandwriting) to Wayland
   - Fixind plugin support on Windows and applying the custom allocators correctly
   - Documentation on distributing software on Windows, Linux and macOS
   - End-to-end testing, documentation fixups, final code review and release
1. Release 1.0.0.0+:
   - Cross-platform indicator support(application icons and menus in the system tray)
   - Cross-platform taskbar right click menu support
  
### UntitledFontUtils 1.0 release delay
The 1.0 release of the [UntitledFontUtils](https://github.com/MadLadSquad/UntitledFontUtils) library is delayed until the middle of February.

The feature set is expected to be the same.

## Announcing pkggen
[pkggen](https://pkggen.madladsquad.com) is our new generic desktop package generation, testing and CI-ready deployment system, 
inspired by the [funtoo-metatools](https://www.funtoo.org/Funtoo:Metatools) project. 

The Funtoo metatools stack was mainly used for generating and publishing Funtoo/Gentoo package updates. Instead,
pkggen implements plugins, generator, and templating in a similar way, but instead of using them to just generate ebuilds, users can generate
multiple package formats, including, their own custom ones, if they so desire.

The pkggen application can be used for:

1. Application developers to:
   - Automatically generate package updates when a new release tag is published through CI
   - Automatically test both full release and release candidate packages in multiple distributions using LXD/Incus containers
   - Automatically deploy the packages to a package repository, such as a PPA, or the AUR
1. Distribution developers to:
   - Automatically generate new package updates whenever an application is updated, so that users always get the latest version
   - Remove their dependence on legacy toolchains
