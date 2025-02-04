Welcome to the February 2025 edition of the monthly newsletter!

## UntitledDesktop
### UntitledImGuiFramework 1.0
The 1.0 version of the [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) will be releasing by the end
of February.

### The future of the UntitledImGuiFramework
The 1.0 release has been in development for about 2.5 years now and this begs the question: what's next for the farmework?

Here is our release roadmap for 2025:

1. Release 1.0 - Adds [UntitledFontManager](https://github.com/MadLadSquad/UntitledFontManager) 0.5 and some minor bug fixes
1. Release 1.1 - Native OS menu integration adapter. This adapter to allow you to integrate your application with the OS menu. This is useful on macOS, where their desktop uses a global menu. This adapter will allow you to select your drawing method - OS or dear imgui
1. Release 1.2 and 1.3 - Window backend change, Android, iOS and iPadOS support
1. Release 1.3.5 - C API for implot
1. Release 1.4 - IME support in dear imgui, including mobile keyboards and selecting for both native and WASM target

### pkggen development plan
We now have a plan for the development of [pkggen](https://pkggen.madladsquad.com/). The plan for the upcoming versions is the following:

1. 0.5 - in the next couple of months
   - Base tarball, GitHub and GitLab generators
   - Support for ebuilds, debs, rpms, pkgbuilds and homebrew packages
   - No testing or uploading functionality
1. 0.6 - uploading to the AUR, PPA and GitHub repositories for pkgbuilds and homebrew packages
1. 0.7 - Linux package testing on Linux, Windows and macOS
1. 0.8 - macOS package testing on Linux, Windows and macOS
1. 0.9 - Windows package testing on Linux, WIndows and macOS
1. 1.0 - Support for Alpine, Void, MacPorts packaging formats
