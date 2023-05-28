In this page we are going to detail some of the features and plans for our desktop envirionment, 
we hope that this page can clear up any questions on what we desire to achieve with this project.

## Introduction to the desktop environment and its applications
The UntitledDesktopEnvironment(shortened to UntitledDesktop or UDE) is a desktop environment for Linux and other operating
systems that use components made by the [freedesktop foundation](https://freedesktop.org).

The UntitledDesktopEnvironment is an umbrella term for the following 3 projects:
1. The UntitledApplicationSuite
1. The UntitledDesktopEnvironment
1. The UntitledDesktopEnvironment Flow

### UntitledApplicationSuite
The UntitledApplicationSuite is a collection of cross-platform applications that serve as utilities for a desktop environment
and are not actual required components of it. This includes applications such as:
1. [UntitledImageViewer](https://github.com/MadLadSquad/UntitledImageViewer)
1. [UntitledCalculator](https://github.com/MadLadSquad/UntitledCalculator)
1. [UntitledTextEditor](https://github.com/MadLadSquad/UntitledTextEditor)
1. [UntitledLinuxGameManager](https://github.com/MadLadSquad/UntitledLinuxGameManager)
1. [UntitledVulkanTerminalEmulator](https://github.com/MadLadSquad/UntitledVulkanTerminalEmulator)
1. [UntitledFileManager](https://github.com/MadLadSquad/UntitledFileManager)
1. [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting)

Most of these applications are cross-platform.

### UntitledDesktopEnvironment
This is the base for the desktop environment. It includes applications, such as:
1. [UntitledDEWelcome](https://github.com/MadLadSquad/UntitledDEWelcome)
1. [UntitledDEPolkitAgent](https://github.com/MadLadSquad/UntitledDEPolkitAgent)
1. [UntitledDESessionLogout](https://github.com/MadLadSquad/UntitledDESessionLogout)
1. [UntitledDEThemeGenerator](https://github.com/MadLadSquad/UntitledDEThemeGenerator)
1. [UntitledDESessionManager](https://github.com/MadLadSquad/UntitledDESessionManager)
1. [UntitledDEPowerManager](https://github.com/MadLadSquad/UntitledDEPowerManager)
1. [UntitledDEWallpaperEngine](https://github.com/MadLadSquad/UntitledDEWallpaperEngine)
1. [UntitledDESettings](https://github.com/MadLadSquad/UntitledDESettings)

When used together, the desktop is almost complete, however, the desktop shell is still missing.

### UntitledDesktopEnvironment Flow
![UDE Flow](https://github.com/MadLadSquad/MadLadSquadSite/assets/40400590/2ac900cd-e261-46cc-a426-692d38c87a6f)

\* Logo derived from Chinese character 川, meaning river/stream.

UntitledDesktopEnvironment Flow or UDF is a minimal reference implementation of such a shell. 
It includes the following 2 applications:
1. A minimal application launcher - [UDFApplicationLauncher](https://github.com/MadLadSquad/UDFApplicationLauncher)
1. A minimal and highly customiseable bar/panel - [UDFPanel](https://github.com/MadLadSquad/UDFPanel)

## Goals
We have the following goals:
1. User freedom
2. Cross-desktop compatibility
3. A fully community-centered approach to development
4. A great UX, no matter the level of the user's knowledge
5. A fully modifiable and hackable application suite out of the box
6. A great multilingual experience
7. A great distribution experience
8. A great theming experience

## A great multilingual experience
Make all applications have UI and docs in multiple languages, allow for easy translation of text and conform to i18n standards. 
More information about the subproject can be found [here](https://madladsquad.com/untitled-desktop/subprojects/i18n)

## A great distribution experience
### UntitledPackageSchemeGenerator
Make all our applications have a unified build process, so that we can easily package them for many platforms. We're already 
developing a tool that can package our software as the following formats:
1. [deb](https://www.debian.org/distrib/packages)
1. [rpms](https://rpm.org/)
1. [ebuilds](https://wiki.gentoo.org/wiki/Ebuild) for [Gentoo](https://gentoo.org) and [Funtoo](https://funtoo.org)
1. [flatpaks](https://flatpak.org/)
1. [arch linux packages](https://wiki.archlinux.org/title/pacman)
1. [winget](https://github.com/microsoft/winget-cli)
1. [MSI installers](https://en.wikipedia.org/wiki/Windows_Installer) for Windows

### UntitledPluginPackageManager
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

\* Official to the UDE theme formats. To clarify, it means that, since these theme specifications are based on the theming
interfaces of a number of GUI libraries which we aren't the developers of, they only exist to standardise the naming of fields
in such theme files. We do not standardise the theme interface, as we're not the developers of these libraries. Theme
standards are also updated when the uderlying library changes their theme interface.

You can find more about the UntitledDesktop theme specification here:
1. [UntitledDesktopThemes Core specification](https://madladsquad.com/untitled-desktop/theming/core-spec)
1. [UntitledDesktopThemes Official Extension: ImPlot](https://madladsquad.com/untitled-desktop/theming/ext-implot)
1. [UntitledDesktopThemes Official Extension: ImGuizmo](https://madladsquad.com/untitled-desktop/theming/ext-imguizmo)
1. [UntitldeDesktopThemes Official Extension: Knobs](https://madladsquad.com/untitled-desktop/theming/ext-knobs)
1. [UntitledDesktopThemes Official Extension: Spinners](https://madladsquad.com/untitled-desktop/theming/ext-spinners)
1. UntitledDesktopThemes Official Extension: Console(For UntitledLog's imgui widget and projects like ImTerm)

## To be added
We're still developing our scope so this section should be expanded in the future

## Specifications
### Misc
1. [UntitledDesktopKeybindings Core Specification](https://madladsquad.com/untitled-desktop/misc/keybinding-spec-core)
