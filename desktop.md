## Introduction to the desktop environment and its applications
The UntitledDesktopEnvironment(shortened to UntitledDesktop or UDE) is an experimental homebrew desktop environment base for Linux and other operating
systems that use components made by the [freedesktop foundation](https://freedesktop.org).

The main goal of UDE is to explore the development of Linux desktop technologies that are independent of large desktop development toolkits,
such as QT or GTK. 

The Linux desktop has been relying on QT and GTK for general desktop tasks to a point, where there is a general lack of small libraries
that do individual tasks related to integrating with the underlying OS or desktop environment. Using these toolkits is great for applications
that need the stability of these toolkits, or for applications that use most of what these toolkits provide, however why should authors of small
applications that require only 1 or 2 features to work, need to pull such toolkits just because nobody bothered to create a small and pluggable
alternative?

Additionally, with the consolidation of the Linux desktop, there will also be a gradual decrease in the general developer knowledge of how
such desktop integrations work or function, leading to general problems with the entire Linux desktop development supply chain.

The UntitledDesktopEnvironment project aims to fix this by creating a base for creating a desktop environment. The project strikes
a balance between using our own custom implementations and working with established Linux desktop standards. Finally, to fix the issue of
depending on large toolkits in small projects, most desktop integrations we develop for our first-party applications are split
into self-contained libraries that are always developed in a generic manner that makes them easy to implement in completely unrelated contexts.

In many ways, one can think of the UntitledDesktopEnvironment as a framework for developing other desktop environment. A collection of generic
reference implementations that developers can pick and choose from to their liking. This is largely why we use the "Untitled" prefix for almost
every one of our applications and libraries 😁

> [!WARNING]
> The project is currently in limited development mode and is mainly focused on maintaining and adding new features to existing applications
> and libraries, until suitable funding and/or a suitable number of contributors are found.

### The UntitledImGuiFramework

<img style="width: 200px; height: 200px; overflow: scroll;" src="https://madladsquad.com/uimgui.svg"/>

The [UntiltedImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) is a cross-platform
desktop application development toolkit that utilises [dear imgui](https://github.com/ocornut/imgui) as its
UI library.

The goal of the framework is to build on top of [dear imgui](https://github.com/ocornut/imgui)'s easy to use and
versatile UI library by creating a pleasant development environment for developing desktop applications with complex
requirements.

It abstracts away many of the boilerplate-ey bits of developing a [dear imgui](https://github.com/ocornut/imgui) application
from scratch, while bundling a number of useful widgets and libraries for integrating with the host operating system or
desktop environment.

You can read more on the project's [GitHub repository](https://github.com/MadLadSquad/UntitledImGuiFramework).

Try out the interactive demo:

<div id="demo-div" style="width: 100%; height: 100%; min-width: 800px; min-height: 600px; display: flex; flex-direction: column;"></div>

### UntitledApplicationSuite
The UntitledApplicationSuite is a collection of first-party applications that use the UntitledDesktopEnvironment's tooling:

1. [UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager)
1. [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting)

### UntitledDesktopEnvironment's native desktop components
The following applications constitute the UntiltedDesktopEnvironment's base desktop tooling:

1. [UntitledDESessionLogout](https://github.com/MadLadSquad/UntitledDESessionLogout)

> [!NOTE]
> More applications are planned to be developed at a future date.

## Development goals
We have the following goals:

1. User freedom
1. Cross-desktop compatibility
1. A fully community-centered approach to development
1. A great UX, no matter the level of the user's knowledge
1. A fully modifiable and hackable application suite out of the box
1. A great multilingual experience
1. A great distribution experience
1. A great theming experience

### User freedom
We prioritise user freedom and system customisability. We think that our users should have the right to:

1. Replace most desktop components without issues \*1
1. Be provided with transparent, and easy to read, maintained documentation of all configuration formats
1. Have the ability to develop plugins for first-party applications using whatever technology stack they find the most suitable \*2
1. Modify features of any applications(when available) in order to tune enabled code and features at compile time for whatever purpose

\*1 - This applies to most applications, though when talking about ones like the settings manager, this might not be
completely possible.

\*2 - This includes active developer involvement by the developers to implement flexible plugin interfaces that can be consumed by any
programming language.

#### How do we achieve this?

1. The desktop is developed as a bunch of swapable modules, rather than a fully integrated solution
1. Applications are built as self-contained atoms that don't necessarily depend on any other UDE application(not necessarily when talking about libraries)
1. Documentation of features is our top priority when developing any feature. The moment it is pushed to a repository, it
should be fully documented
1. For formats such as foreign themes, we build multidirectional adapters and conversion tools
1. All our libraries provide a C and C++ API. The C API can be used to create bindings to any programming language
1. We utilise compile flags to enable and disable any optional features. This applies to our toolkit when compiling an application
statically, or to a number of our applications, where some additional features can be disabled through these flags

### Cross-desktop compatibility
We achieve cross-desktop compatibility in the following ways:

1. By being a flexible framework that is not opinionated
1. By following all standardisation efforts by the [freedesktop group](https://freedesktop.org)
1. By building adapter utilities and libraries to convert between incompatible formats
1. By collaborating with other desktops to improve compatibility

### A great multilingual experience
Make all applications have UI and docs in multiple languages, allow for easy translation of text and conform to i18n standards. 
More information about the subproject can be found [here](https://madladsquad.com/untitled-desktop/subprojects/i18n).

### A great distribution experience
Through tools, such as [pkggen](https://pkggen.madladsquad.com), the UntitledDesktopEnvironment is being built to be
distributed as widely as possible in a sustainable matter.

### A great theming experience
We aim to achieve a great theming experience in the following ways:

1. We use a simple YAML format for themes
1. Themes are minimal and only cover colours and sizes of some elements(in contrast to Gnome CSS files)
1. Restricting theming only to the colours and scaling of an application
1. Multi-directional compatibility tools for converting themes between the theme formats of other desktops:
    - They allow us to use the large collection of already available GTK and QT themes
    - They allow us to generate GTK and QT themes on the fly, so that the user doesn't have to deal with matching and setting them 
      separately
1. Themes have full inheritance: an application can use the root global theme or inherit from another application's
1. Themes are not forced on developers: Turning off theming support doesn't require an action from the developer when using
our toolkit
1. The theme formats are well-documented and are made to be easy to use without breaking any applications along the way

### To be added
We're still developing our scope so this section should be expanded in the future

## Specifications
### Misc
1. [UntitledDesktopKeybindings Core Specification](https://madladsquad.com/untitled-desktop/misc/keybinding-spec-core)

