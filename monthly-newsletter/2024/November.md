Welcome to the November 2024 edition of the monthly newsletter.

## UntitledDesktop
### Preparing for the UntitledImGuiFramework 1.0
The 1.0 release of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) is now being actively worked on, and
we're planning on releasing release candidates by the end of the month, to the middle of December.

Current missing features since 0.9.9.0:

1. [UntitledFontUtils](https://github.com/MadLadSquad/UntitledFontUtils) 1.0
1. Fixing critical lingering issues with the [UntitledDBusUtils](https://github.com/MadLadSquad/UntitledDBusUtils) library
1. Packaging the framework for more Linux distributions
1. End-to-end testing and documentation updates

### UntitledDBusUtils 1.1 & 1.2
The 1.1 and 1.2 releases of the [UntitledDBusUtils](https://github.com/MadLadSquad/UntitledDBusUtils) library will fix 2 major 
breakages that impact many types of applications.

### UntitledFontUtils 0.5
The [UntitledFontUtils](https://github.com/MadLadSquad/UntitledFontUtils) 0.5 release will provide us a with a library for easily fetching 
system fonts in a cross-platform manner, which is really important for applications that need support for multiple languages that may not 
want to vendor in their own fonts.

This version will only be returning raw data from the OS, though, so the fonts list would look more like dropdowns in text 
editing applications, that allow you to select what font to show. The fonts are there, but they're not ordered correctly, and are not
combined to form a coherent multilingual font atlas.

### Desktop packaging
By the end of November the UntitledDesktopEnvironment will be fully packaged in the following packaging formats:

1. DEBs
1. RPMs
1. Arch Linux PKGBUILDs
1. Gentoo Linux

Meanwhile, we're working on a system that can automatically update those packages in a CI-friendly way.

## MadLadSquad
New unannounced projects coming soon.

## Tiny.lol
Work on the backend is continuing.

## Youyin
Work on the backend will be started soon.
