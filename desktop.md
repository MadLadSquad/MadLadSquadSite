## NEW: [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) interactive web demo

<div id="demo-div" style="width: 100%; height: 100%; min-width: 800px; min-height: 600px; display: flex; flex-direction: column;"></div>

## Introduction to the desktop environment and its applications
The UntitledDesktopEnvironment(shortened to UntitledDesktop or UDE) is a desktop environment for Linux and other operating
systems that use components made by the [freedesktop foundation](https://freedesktop.org).

> [!WARNING]
> The project is currently in limited development mode and is mainly focused on maintaining and adding new features to existing applications
> and libraries, until suitable funding and/or a suitable number of contributors are found.

### UntitledApplicationSuite
The UntitledApplicationSuite is a collection of first-party applications that use the UntitledDesktopEnvironment's tooling:

1. [UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager)
1. [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting)

### UntitledDesktopEnvironment
This is the base for the desktop environment. It includes applications, such as:

1. [UntitledDEPolkitAgent](https://github.com/MadLadSquad/UntitledDEPolkitAgent)
1. [UntitledDESessionLogout](https://github.com/MadLadSquad/UntitledDESessionLogout)

This is the core of the desktop. Users shall then create their own shell.

> [!NOTE]
> More applications are planned to be developed at a future date.

## Goals
We have the following goals:

1. User freedom
1. Cross-desktop compatibility
1. A fully community-centered approach to development
1. A great UX, no matter the level of the user's knowledge
1. A fully modifiable and hackable application suite out of the box
1. A great multilingual experience
1. A great distribution experience
1. A great theming experience

## User Freedom
We prioritise user freedom and system customisable. These are the rights of our users:

1. The user shall be able to replace most desktop components as he/she wishes without issues \*1
1. The user shall be provided with transparent, and easy to read, maintained documentation of all configuration formats
1. The user shall have the ability to develop plugins for first-party applications using whatever technology stack they find the most suitable \*2
1. The user shall have the freedom to modify features of any applications(when available) in order to tune enabled
code and features at compile time for whatever purpose

\*1 - This applies to most applications, though when talking about ones like the settings manager, this might not be
completely possible.

\*2 - This includes active developer involvement by the developers to implement flexible plugin interfaces that can be consumed by any
programming language.

### How do we achieve this

1. At its core, the main components of the UntitledDesktopEnvironment are more like a framework for desktop environments, than an actual structured desktop with set conventions
1. Applications are, in most cases, built as self-contained atoms that don't necessarily depend on any other UDE application
1. Documentation of features is our top priority when developing any feature. The moment it is pushed to a repository, it
should be fully documented
1. For formats such as foreign themes, we build multidirectional adapters and conversion tools
1. All our libraries provide a C and C++ API. The C API can be used to create bindings to any programming language
1. We utilise compile flags to enable and disable features. This applies to our toolkit when compiling an application
statically, or to a number of our applications, where some additional features can be disabled through these flags

## Cross-desktop compatibility
We achieve cross-desktop compatibility in the following ways:

1. By being a flexible framework that is not opinionated
1. By following any standardisation efforts by the [freedesktop group](https://freedesktop.org)
1. By building adapter utilities and libraries to convert between incompatible formats
1. By collaborating with other desktops to improve compatibility

## A great multilingual experience
Make all applications have UI and docs in multiple languages, allow for easy translation of text and conform to i18n standards. 
More information about the subproject can be found [here](https://madladsquad.com/untitled-desktop/subprojects/i18n).

## A great theming experience
We achieve a great theming experience using the following ways:

1. We use a simple YAML format for themes
1. Themes are minimal and only cover colours and sizes of some elements(in contrast to Gnome CSS files)
1. Restricting theming only to the colours and scaling of an application
1. Multi-directional compatibility tools for converting themes between our format, GTK and QT:
    - They allow us to use the large collection of already available GTK and QT themes
    - They allow us to generate GTK and QT themes on the fly, so that the user doesn't have to deal with matching setting them 
      separately
1. Themes have full inheritance: an application can use the root global theme or inherit from another application's
1. Themes are not forced on developers: Turning off theming support doesn't require an action from the developer when using
our toolkit
1. Themes and theme formats have official\* specifications, that define the format of a theme. These specifications can be
extended using extensions to the standard.

## To be added
We're still developing our scope so this section should be expanded in the future

## Specifications
### Misc
1. [UntitledDesktopKeybindings Core Specification](https://madladsquad.com/untitled-desktop/misc/keybinding-spec-core)

