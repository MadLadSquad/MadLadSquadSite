In this page we are going to detail some of the features and plans for our desktop envirionment, we hope that this page can clear up any questions on
what we desire to achieve with this project

## Motivation
Our motivation is simple, create a great desktop environment for Linux and other operating systems running components made by the 
[freedesktop foundation](https://freedesktop.org)

But beyond that, why are we creating it in the first place and what are the problems we want to fix? First, let's start with a quick overview of 
why the FOSS desktop has problems. Most applications don't communicate with one another. The main issue causing this is that 
Unix based OS' architectures don't feature the desktop as an essential component since their architecture was developed way before the concept of a GUI 
application became a thing. 

Because of this the GUI became a job for third parties, and as a result we don't have the same uniformity as systems like
Windows, MacOS or even Android flavours. This all negatively impacts UX and unfortunately is not a fixable issue, fortunately shells
like Gnome and KDE, have for the most part removed most problems to date and the UX is definitely a great one over there.

So why even consider UDE when you said that KDE and Gnome are great 😂. Well here's the thing, we're actually not trying to compete with them, all we
want to create is an alternative desktop experience. Here are our priorities:
1. Freedom
1. Cross-desktop compatibility
1. A fully community-centered approach to development
1. A uniform experience or as close as we can get to it
1. A great UX, no matter your level of knowledge
1. A fully modifiable and hackable application suite out of the box
1. Even more small things such as great multilingual experience

We will cover all of those points in the headers below

## Freedom
We want the user to have full freedom in whatever applications they want to use, and to give this freedom without impacting the approximately good UX

A user shall have the ability to:
1. Replace the desktop widgets system(i.e. wallpaper manager, status bar), applications, libraries, etc. and the system should work normally. The
environment shall not be a monolith that breaks on the removal of any applications, regardless of how large or small it is
1. Use any configuration format, library and/or programming language they want in configuring their programs
1. The user shall have full conscious choice on all features he/she wants and shall be able to completely control which components get installed
1. The user shall have the freedom to modify every application he/she desires in an easy manner using plugins that don't discriminate against the
programming language, configuration format or general technology the user deems fit for the job
1. Developers shall be freed from a pendantic environment where the DE developers force a certain style, toolkit and rules on developers

Please do note that these points should be balanced and applied at a reasonable level, an application that has a single config file, shouldn't add
code for all config formats just because it can, instead it should use its preferred config. If this given config is like a theme, where many systems
have themes, then the application shall have an adapter, an application that converts the other formats to its, or vice-versa if the fomat is non-conforming

### How do we achieve this
1. A standard C and C++ API for all applications that can benefit from it, so that a user can make a plugin using bindings for another programming
language or use a plugin that provides a runtime environment in the case of a scripting language. The intention is to let the users use
whatever technologies they want and not force them to use a single programming language for development of plugins. We think that this positively
impacts our user experience, not only because advanced users can feel right at home by using whatever tools they want, but also because a larger number
of advanced users can develop plugins, making the plugin ecosystem richer and therefore the end user experience better
1. Every application is a self-sustained atom, meaning that it can be swapped out with some other application at any time without breaking the system
1. Cross-format and cross-desktop compatibility so that users can easily convert their old configs into our ecosystem, or vice versa,
without having to manually tinker for hours or even days rewriting the same config in a different format
1. Compile flags that can be used by the user to enable or disable any additional features. This is important because it provides
minimalist users with the option to have a minimal environment. The benefits of minimalism are many including less bugs and higher security, 
but unfortunately we cannot discuss all of them here

## Cross-desktop compatibility
What we mean by cross-desktop compatibility is: paradigms and components made for desktops such as Gnome and KDE, shall have the ability to work
effordlessly on our system. This includes things such as:
1. Having converters for config files, plugins, themes, etc.
1. Listening for signals from dbus and responding to them appropriately
1. Not creating pedantic design policies and requirements
1. Adapting our system to their user-facing APIs

This section will be expanded to be more detailed soon!

## A fully community-centered approach to development
We want our community to control the direction of our projects, that's why we distribute our software as open source.

Our collaboration workflow is the following:
1. Make an issue
1. Submit a pr if needed or if ready
1. Maintainers review the code
1. If the review is successful, pre-pr merge discussion starts, mainly who is going to maintain the code or how it's going to be maintained
1. In the end the PR gets merged

We also have a bunch of roles we have as well as responsibilities:
1. Project manager
   - Basically a god title that has responsibility for keeping the scope of the project managing feature decisions and more. Is responsible for and works
     on the tasks taken by the lower tiers. So basically responsible for everything and can take over at any moment
3. Maintainer
   - Fixing bugs
   - Reviewing PRs
   - Keeping backwards compatibility
4. Developer
   - Implementing new features
   - Merging and integrating feature PRs if needed
   - Helping maintainers deal with new features
5. Contributor
   - Code contributors
     - Contribute code for whatever reason, be it feature request or bug fixes
   - Docs contributors
     - Contribute to the documentation in either the code or the document format
     - Create educational resources for other users
     - Help developers with learning how to use the software
   - Translation contributors
     - Contributes translations to the docs, to applications and everything we can m18nise
   - Plugin contributors
     - Help maintain a beautiful C and C++ APIs for plugins in our applications
   - Art and asset contributors
     - Help design icons, art, 3D models, sound effects and more things that need to be included into our applications
   - Misc contributors
     - For everything else we didn't mention
6. Observer
   - This is a specific role for developers and maintainers that don't necessarily work full time on the project, but that have a lot of experience with it
   and can help at any time when an emergency occurs

Please do note that these roles are there for semantic reason, you can freely assign yourself any of the contributor roles, and you can switch from any
higher role to an equivalent or lower role. You do need official promotion from the desktop team to get to any of the top 3 roles

## A uniform experience and a better UX
As all desktops want, we want to achieve a uniform desktop experience, this however, doesn't mean that we'll be adding a pedantic style guide
as many other desktops like Gnome do, instead we'll just give you a recommended guide, which you can see [here](https://madladsquad.com/desktop-design)

This page is a loose guide on how we design our applications, our platform scope and good developement practices in regard to UI

## Misc goals
### A great multilingual experience
Make all applications have UI and docs in multiple languages, allow for easy translation of text and conform to i18n standards

### A great distribution experience
Make all our applications have a unified build process, so that we can easily package them for many platforms. We're already developing a tool that can 
package our software as the following formats:
1. [deb](https://www.debian.org/distrib/packages)
1. [rpms](https://rpm.org/)
1. [ebuilds](https://wiki.gentoo.org/wiki/Ebuild) for [Gentoo](https://gentoo.org) and [Funtoo](https://funtoo.org)
1. [flatpaks](https://flatpak.org/)
1. [arch linux packages](https://wiki.archlinux.org/title/pacman)
1. [winget](https://github.com/microsoft/winget-cli)
1. [MSI installers](https://en.wikipedia.org/wiki/Windows_Installer) for Windows

Additionally we're also developing a package manager for application plugins and mods for the UntitledVulkanGameEngine. The package manager is completely 
open and anyone can add a package. Additionally third party developers of applications/games using our tools can also create their own single application 
package repository, that we can add to our main repository as a submodule, making all applications accessible from a single package manager even if not 
made by us

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
3. UntitledDesktopThemes Official Extension: ImGuiColorTextEdit
4. UntitledDesktopThemes Official Extension: ImGuizmo
5. UntitledDesktopThemes Official Extension: ImTTY
6. UntitledDesktopThemes Official Extension: Markdown(For UntitledImGuiMDWidget and other Markdown Widgets)
7. [UntitldeDesktopThemes Official Extension: Knobs](https://madladsquad.com/untitled-desktop/theming/ext-knobs)
8. [UntitledDesktopThemes Official Extension: Spinners](https://madladsquad.com/untitled-desktop/theming/ext-spinners)
9. UntitledDesktopThemes Official Extension: Console(For UntitledLog's imgui widget and projects like ImTerm)
10. UntitledDesktopThemes Official Extension Concept: Windows IME styling 

### To be added
We're still developing our scope so this section should be expanded in the future
