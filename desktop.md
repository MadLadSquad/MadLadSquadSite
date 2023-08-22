In this page we are going to detail some of the features and plans for our desktop envirionment, 
we hope that this page can clear up any questions on what we desire to achieve with this project.

## Introduction to the desktop environment and its applications
The UntitledDesktopEnvironment(shortened to UntitledDesktop or UDE) is a desktop environment for Linux and other operating
systems that use components made by the [freedesktop foundation](https://freedesktop.org).

The UntitledDesktopEnvironment is an umbrella term for the following projects:

1. The UntitledApplicationSuite
1. The UntitledDesktopEnvironment

### UntitledApplicationSuite
The UntitledApplicationSuite is a collection of cross-platform applications that serve as utilities for a desktop environment
and are not actual required components of it. This includes applications such as:

1. [UntitledImageViewer](https://github.com/MadLadSquad/UntitledImageViewer)
1. [UntitledGameSystemManager](https://github.com/MadLadSquad/UntitledGameSystemManager)
1. [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting)

### UntitledDesktopEnvironment
This is the base for the desktop environment. It includes applications, such as:

1. [UntitledDEWelcome](https://github.com/MadLadSquad/UntitledDEWelcome)
1. [UntitledDEPolkitAgent](https://github.com/MadLadSquad/UntitledDEPolkitAgent)
1. [UntitledDESessionLogout](https://github.com/MadLadSquad/UntitledDESessionLogout)
1. [UntitledDEThemeGenerator](https://github.com/MadLadSquad/UntitledDEThemeGenerator)
1. [UntitledDEWallpaperEngine](https://github.com/MadLadSquad/UntitledDEWallpaperEngine)

This is the core of the desktop. Users shall create their own shell, further.

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
We prioritise user freedom and system customisability. These are the rights of our users:

1. The user shall be able to replace most application with any other equivalent without breaking the system \*1
1. The user shall have the ability to transparent documentation of all configuration formats
1. The user shall have the ability to use any configuration and/or programming language of their liking when
configuring software or developing plugins for software part of UDE \*2
1. The user shall have the freedom to modify features of any applications(when available) in order to tune enabled
code and features at compile time for whatever purpose
1. The user shall be allowed a way to develop plugins and addons for our applications regardless of their preferred
programming language \*3

\*1 - This applies to most applications, though when talking about ones like the settings manager, this might not be
completely possible.

\*2 - When talking about configuration files, this is not to say that an application using a YAML config should also
open TOML, just for the case where a user might want to use TOML. Instead, for most popular formats, such as theme files,
we apply the adapter model, where an application may convert TOML to YAML. We might develop such tools for aforementioned
popular files, but any formats that are not of high demand shall be adapted by third party users.

\*3 - Where it is reasonable to implement such support. Some applications, like those that are narrowly specialised
may not recieve plugin interfaces.

### How do we achieve this

1. Our desktop environment doesn't assume specialised desktop convention and acts more like a DE framework
1. Applications are, in most cases, built as self-sustained atoms that don't necessarily depend on any other UDE application
1. Documentation of features is our top priority when developing any feature. The moment it is pushed to a repository it
should be fully documented
1. For formats such as foreign themes, we build multidirectional adapters and conversion tools
1. All our libraries provide a C and C++ API. The C API can be used to create bindings to any programming language
1. We utilise compile flags to enable and disable features. This applies to our toolkit when compiling an application
statically or to a number of our applications, where some additional features can be disabled through compile flags

## Cross-desktop compatibility
We achieve cross-desktop compatiliby in the following ways:

1. By not assuming a specific desktop convention and acting more like a DE framework
1. By following any standardisation effords by the [freedesktop group](https://freedesktop.org)
1. By building adapter utilities and libraries to convert between incompatible formats
1. By collaborating with other desktops to improve compatibility

## Development
Our approach to development is fully community centered. We run on a 2 tier developer system:

1. Staff - Has additional administrative and moderative rights such as the ability to review pull requests
1. Developer - Any other user that contributes to our projects

However, apart from this, we're all users of the software. Some of us may be developers of the software, but we shall never
loose touch with the simple fact that we're all users of the software. As users, we shall be focused on our shared experience
and shall make it easier for any user even non-technical ones and the subset of beginner non-technical users.

## A great multilingual experience
Make all applications have UI and docs in multiple languages, allow for easy translation of text and conform to i18n standards. 
More information about the subproject can be found [here](https://madladsquad.com/untitled-desktop/subprojects/i18n).

## A great distribution experience
### UntitledPackageGenerator
Make all our applications have a unified build process, so that we can easily package them for many platforms. We're already 
developing a tool that can package our software as the following formats:
1. [deb](https://www.debian.org/distrib/packages)
1. [rpms](https://rpm.org/)
1. [ebuilds](https://wiki.gentoo.org/wiki/Ebuild) for [Gentoo](https://gentoo.org) and [Funtoo](https://funtoo.org)
1. [flatpaks](https://flatpak.org/)
1. [arch linux packages](https://wiki.archlinux.org/title/pacman)
1. [winget](https://github.com/microsoft/winget-cli)
1. [MSI installers](https://en.wikipedia.org/wiki/Windows_Installer) for Windows

### UntitledPackageManager
A package manager for UDE plugins. Using it improves the plugin installation experience, leaves less work for the user and makes
plugins safer.

The package manager also supports custom package repositories.

## A great theming experience
We achieve a great theming experience using the following ways:

1. We use a simple YAML format for themes
1. Themes are minimal and only cover colours and sizes of some elements(in contrast to Gnome CSS files)
1. Animation theming is completely not supported
1. Multi-directional compatibility tools for converting themes between our format, GTK and QT
    - They allow us to use the large collection of already available GTK and QT themes
    - They allow us to generate GTK and QT themes on the fly, so that the user doesn't have to deal with matching setting them 
      separately
1. Themes have full inheritance, an application can use the root global theme or inherit from another application's
1. Themes are not forced on developers - Turning off theming support doesn't require an action from the developer when using
our toolkit
1. Themes and theme formats have official\* specifications, that define the format of a theme. These specifications can be
extended using extensions to the standard.

<!--
\* Official to the UDE theme formats. To clarify, it means that, since these theme specifications are based on the theming
interfaces of a number of GUI libraries which we aren't the developers of, they only exist to standardise the naming of fields
in such theme files. We do not standardise the theme interface, as we're not the developers of these libraries. Theme
standards are also updated when the uderlying library changes their theme interface.

You can find more about the UntitledDesktop colour theme specification here:

1. [UntitledDesktopThemes Core specification](https://madladsquad.com/untitled-desktop/theming/core-spec)
1. [UntitledDesktopThemes Official Extension: ImPlot](https://madladsquad.com/untitled-desktop/theming/ext-implot)
1. [UntitledDesktopThemes Official Extension: ImGuizmo](https://madladsquad.com/untitled-desktop/theming/ext-imguizmo)
1. [UntitldeDesktopThemes Official Extension: Knobs](https://madladsquad.com/untitled-desktop/theming/ext-knobs)
1. [UntitledDesktopThemes Official Extension: Spinners](https://madladsquad.com/untitled-desktop/theming/ext-spinners)
1. UntitledDesktopThemes Official Extension: Console(For UntitledLog's imgui widget and projects like ImTerm)

Additional theme specifications we comply with:

1. [Freedesktop Audio Theme specification](https://www.freedesktop.org/wiki/Specifications/sound-theme-spec/)
1. [Freedesktop Icon Theme specification](https://www.freedesktop.org/wiki/Specifications/icon-theme-spec/)
1. [Freedesktop Cursor Theme specification](https://www.freedesktop.org/wiki/Specifications/cursor-spec/)
1. [Freedesktop Thumbnail Management specification](https://www.freedesktop.org/wiki/Specifications/thumbnails/)
1. [Freedesktop Shared Default Keyboard Shortcuts specification](https://www.freedesktop.org/wiki/Specifications/default-keys-spec/)
-->

## To be added
We're still developing our scope so this section should be expanded in the future

## Specifications
### Misc
1. [UntitledDesktopKeybindings Core Specification](https://madladsquad.com/untitled-desktop/misc/keybinding-spec-core)

