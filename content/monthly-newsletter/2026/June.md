Welcome to the June 2026 edition of the monthly newsletter.

# UntitledDesktop
This month started with a large refactoring effort along multiple projects:

1. [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework)
   - Moved to a newer dear imgui version
   - Reworked renderers to utilise the new dear imgui texture filtering API
   - Updated many dependencies
1. [UntiltedI18N](https://github.com/MadLadSquad/UntitledI18N) - Fixed a critical resource loading crash
1. [UntitledOpen](https://github.com/MadLadSquad/UntitledOpen) - Users can now pick multiple folders, customize their picker window and parent the picker's window to their own window
1. [UntitledXDGBasedir](https://github.com/MadLadSquad/UntitledXDGBasedir) - Fixed some rare bugs and better memory management
1. [UntitledImGuiTheme](https://github.com/MadLadSquad/UntitledImGuiTheme) - Updated to follow new dear imgui style variables
1. [UntitledRuntimeLibraryLoader](https://github.com/MadLadSquad/UntitledRuntimeLibraryLoader) - Fixed some memory bugs
1. [UntitledLog](https://github.com/MadLadSquad/UntitledLog) - Fixed typo in an API function
1. [UImGuiRendererExamples](https://github.com/MadLadSquad/UImGuiRendererExamples) - Reworked renderers to utilise the new dear imgui texture filtering API
1. [UImGuiSDL](https://github.com/MadLadSquad/UImGuiSDL) - Update documentation due to changes in the build process
1. [cimgui\_extra](https://github.com/MadLadSquad/cimgui_extra) - Updated the C API for imspinner
1. [imspinner](https://github.com/dalerank/imspinner) - Contributed some compilation fixes for newer dear imgui versions

Our goal for the end of the month is to publish a new maintenance release with these patches.

# pkggen
Development of pkggen is restarting, we don't have a concrete plan for June, but by the end of the month we plan to have at least one
working packaging backend.

# Multilingual
## Youyin 1.0
Work on the modernisation of Youyin has finally started and it includes:

1. More than 150 new colour themes
1. Fixes for most UI/UX bugs
1. A redesigned front page
1. A redesigned deck page
1. A tutorial for new users
1. An assortment of useful learning decks
1. A working daily streak system
1. A working daily level reduce mechanic
1. A redesigned game recap view
1. PWA integration and offline mode
1. Uniform emoji font across all browsers
1. Many bug fixes and refactoring changes
1. Better UI when practicing phrases

The following tasks that are part of the 1.0 release and will be completed in July:

1. Moving away to a new name for the site and getting a new domain + logo
1. Introducing an accounts system with deck synchronisation
1. Site monetization

We will also work on completing the following features throughout the year:

1. Adding more characters(Cyrillic, Latin, Georgian, Armenian, Greek)
1. Translating the site into other languages(German, Mandarin, Greek, Russian, Romanian)
