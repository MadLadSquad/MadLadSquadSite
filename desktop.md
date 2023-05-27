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

## Motivation
We were motivated to create this desktop because of the following reasons:
1. Other desktops were too monolithic
1. Plugin support and extensibility was lacking in most of them
1. Support for 

## Misc goals
### A great multilingual experience
Make all applications have UI and docs in multiple languages, allow for easy translation of text and conform to i18n standards. More information about 
the subproject can be found [here](https://madladsquad.com/untitled-desktop/subprojects/i18n)

### A great distribution experience
Make all our applications have a unified build process, so that we can easily package them for many platforms. We're already 
developing a tool that can package our software as the following formats:
1. [deb](https://www.debian.org/distrib/packages)
1. [rpms](https://rpm.org/)
1. [ebuilds](https://wiki.gentoo.org/wiki/Ebuild) for [Gentoo](https://gentoo.org) and [Funtoo](https://funtoo.org)
1. [flatpaks](https://flatpak.org/)
1. [arch linux packages](https://wiki.archlinux.org/title/pacman)
1. [winget](https://github.com/microsoft/winget-cli)
1. [MSI installers](https://en.wikipedia.org/wiki/Windows_Installer) for Windows

Additionally we're also developing a package manager for application plugins and mods for the UntitledVulkanGameEngine. 
The package manager is completely open and anyone can add a package. Additionally, third party developers of 
applications/games using our tools can also create their own single application package repository, that we can add to our 
main repository as a submodule, making all applications accessible from a single package manager even if not made by us.

### A great theming experience
We want to have a good theming experience, we achieve that in the following ways:
1. We use a simple YAML format for themes
1. Themes are minimal and only cover colours and sizes of some elements
1. Animations are implementation defined and are not core of the standard toolkit(the developer needs to implement each animation manually)
1. We will build compatibility tools for GTK and QT themes so that you can use the wide varierty of available QT and GTK themes on your system seamlessly
1. Our conversion tools will be automatically run for any theme you selected as the default, be it GTK, QT or UDE based so that you have uniformity 
across all applications, not just ours
1. Themes will have inheritance, that being, the theme author handles the compatibility of a theme, not the application author, removing the unnecessary
maintenance burden many open source maintainers face with custom themes. By that logic any application can override the master theme whenever it wants if
it wants to provide its own look. Applications will never be forced to be compatible with themes and standard theming is itself an extension of 
the core [UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework) toolkit
1. Themes support standard extensions so that applications can expose additional variables to themes

You can find more about the UntitledDesktop theme specification here:
1. [UntitledDesktopThemes Core specification](https://madladsquad.com/untitled-desktop/theming/core-spec)
1. [UntitledDesktopThemes Official Extension: ImPlot](https://madladsquad.com/untitled-desktop/theming/ext-implot)
1. [UntitledDesktopThemes Official Extension: ImGuizmo](https://madladsquad.com/untitled-desktop/theming/ext-imguizmo)
1. [UntitldeDesktopThemes Official Extension: Knobs](https://madladsquad.com/untitled-desktop/theming/ext-knobs)
1. [UntitledDesktopThemes Official Extension: Spinners](https://madladsquad.com/untitled-desktop/theming/ext-spinners)
1. UntitledDesktopThemes Official Extension: Console(For UntitledLog's imgui widget and projects like ImTerm)

### To be added
We're still developing our scope so this section should be expanded in the future

## Specifications
### Misc
1. [UntitledDesktopKeybindings Core Specification](https://madladsquad.com/untitled-desktop/misc/keybinding-spec-core)
