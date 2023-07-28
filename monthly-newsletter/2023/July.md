Welcome to the July 2023 edition of the monthly newsletter.

## UntitledDesktop
### The framework can be deployed
Due to a couple of commits in June, the framework can finally be cleanly deployed and packaged by most packaging systems. 
Current applications, except the [UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager), 
can be deployed to all major packaging formats as is. The game manager requires some additional work on the package side, 
due to it using a golang library.

All features can be found in the 
[previous month's newsletter](https://madladsquad.com/monthly-newsletter/2023/June#untitledimguiframework-0500-part-2).

### UntitledImGuiFramework 0.5.0.0
Since the framework can finally be deployed, we are doing final code reviews for releasing 0.5.0.0. It should release by the 2nd 
of July.

After that we have the following tasks:
1. Create a custom i18n library
1. Finish the [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
1. Rewrite the [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) to use the templating engine

### UntitledImGuiFramework 0.6.0.0
The completion of the following features also made the release of 0.6.0.0 possible:
1. [UntitledXDGBasedir](https://github.com/MadLadSquad/UntitledXDGBasedir)  1.0 and 2.0
1. [UntitledImGuiTextUtils](https://github.com/MadLadSquad/UntitledImGuiTextUtils) 1.0
1. The ability to output textures

### UntitledImGuiFramework 0.6.5.0
Since we released the 1.0 version [UntitledDBusUtils](https://github.com/MadLadSquad/UntitledDBusUtils), we can also release
release 0.6.5.0.

### UntitledXDGBasedir
The [UntitledXDGBasedir](https://github.com/MadLadSquad/UntitledXDGBasedir) library is going to be released this month.
The library is intended to be an implementation of and superset of the 
[XDG Basedir specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html). While it does include
all functions needed by such an implementation, it also includes features such as:
1. Support for XDG User dirs
1. Finding the user trash directory
1. Creating non-existant directories

Release 1.0 and 2.0 were released on the 9th and 15th of July respectivelly.

### UntitledImGuiTextUtils
This month we will also introduce the 1.0 release of the 
[UntitledImGuiTextUtils](https://github.com/MadLadSquad/UntitledImGuiTextUtils) library. It's a library for rendering rich text
and markup in dear imgui. Expected 1.0 release is July 17th.

### UntitledGameSystemManager 1.0
The 1.0 release of the [UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager) is finally live as of
the 21th of July.

We also released the hotfix 1.1 version that fixes a major bug when deleting containers.

### Desktop files and Mime types
All graphical applications now have [desktop files](https://www.freedesktop.org/wiki/Specifications/desktop-entry-spec/), and when applicable, [Mime](https://en.wikipedia.org/wiki/MIME) types for the file formats that are supported.

This brings the following benefits:
1. Our applications can now be listed in menus
1. Application launchers can use keyword and fuzzy search
1. Applications can now be set as the default for opening certain files

### UDE Flow
The [UDF Panel](https://github.com/MadLadSquad/UDFPanel) is in its planning stage, which means that development may start this 
month or in August.

### UntitledDesktopBootstrap 0.1.0.0
The first experimental release of the [UntitledDestktopBootstrap](https://github.com/MadLadSquad/UntitledDestkopBootstrap)
project is live. Currently, no session is created by the `xinitrc` so no desktop can actually be launched but is a good starting
point for developing further our DE's initial setup and startup capabilities.

## Multilingual
The current tasks for the multilingual project are as follows:
- [ ] Creating the custom i18n library for the framework
- [ ] Creating a static site component based system for Youyin using the templating engine
- [ ] Adding more data to [Youyin](https://youyin.madladsquad.com/) and sister projects
- [ ] Autogenning the Adobe SourcePro and Google Noto fonts in Funtoo Linux, [FL-10383](https://bugs.funtoo.org/browse/FL-10383)
- [ ] Rework the MadLadSquad website

### Phrases in Youyin
A new feature will be added to Youyin that would allow the user to practice words at the end of the session. In simple terms, 
the user will first have to go through the entire deck of single character cards as currently, but when the cards end, 
he/she will be prompted with words that use the previous cards. This will make learning way more effective for Chinese 
languages as the user learns both the meaning of the character and how it fits into a word.

### Working on finishing the UntitledTemplatingEngine
Work on finishing the [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine) is restarting this 
month. We hope to get it released by the end of August 2023.
