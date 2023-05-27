Welcome to the May 2023 monthly newsletter. This is the first issue of the Monthly newsletter series. We think this can make it 
easier for followers of the project to be informed with what changes every month.

## Games
While we didn't have much activity in the games department in the last year, we have done some planning. 
Mainly, we're planning to completely remake the 
[UntitledVulkanGameEngine](https://github.com/MadLadSquad/UntitledVulkanGameEngine) by forking the 
[UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework). This would allow us to keep a mostly unified
backend so that changes in the framework make their way to the game engine. This will break current API, but will not be a major 
breakage.

When starting development on the framework, we actually forked the game engine and made modifications to the API to make it 
smaller, more minimal, have better naming, documentation and more. The same familiar API structure is still there though, 
which means that switching to the new version of the game engine should be pretty straight forward, excluding some changes 
in systems like the `Input` interface.

We still don't have a roadmap for this fork, but we will keep you updated.

## UntitledDesktop
### Preparing for UntitledImGuiFramework 0.5.0.0
For at least 2 months, we have been preparing for the first release of the 
[UntitledImGuiFramework](https://github.com/MadLadSquad/UntitledImGuiFramework). These are the current tasks for 0.5.0.0:
- [ ] Reworked build system
   - Includes including install statements to cmake
   - Creating the different library layout systems
- [ ] Threads system
- [ ] Production export system
- [x] Loading of raw data into textures(feature requested by 
      [UntitledImageViewer](https://github.com/MadLadSquad/UntitledImageViewer))
- [ ] Renaming of the locale modules to the i18n module
- [ ] Creating a custom, separate i18n library
- [ ] Building the first release of the full C API
- [ ] Finish the [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
- [ ] Rewrite the [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) to use the new 
      [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
- [x] Greatly expand the Window interface
- [x] Allow for X11 semantic window types, allows us to start UDE Flow

Please note, that 0.5.0.0 will not release this month. Though most features listed above will be completed this month, 
expect the actual release somewhere in June or July at the earliest.

### UntitledImageViewer 0.5.0.0
In May, work on the 0.5.0.0 release of the [UntitledImageViewer](https://github.com/MadLadSquad/UntitledImageViewer), continues. 
Release 0.5.0.0 will include all features listed in the readme, except the following:
1. Image cropping
1. Image flipping
1. Metadata viewing and editing
1. Rotating images

This should be released around the end of June to the beginning of July

### UntitledLinuxGameManager
We will continue our work on the 1.0.0.0 release of the 
[UntitledLinuxGameManager](https://github.com/MadLadSquad/UntitledLinuxGameManager). This currently includes the following 
features:
- [ ] Stability and general features
  - [ ] Creating a golang interface for executing commands inside the container
  - [ ] Container status indicators
  - [ ] Application status indicators
  - [ ] The ability to kill an application
  - [ ] Checks for internet connection when starting a container, switching to brindge/eth and more
  - [ ] Checks for good connection to the LXD daemon
- [ ] Quality of life features
  - [ ] Add heroic launcher
  - [ ] Install AUR helper
  - [ ] Copy desktop files and mimetypes to the host system
  - [ ] Pass the ibus bus to the container

We're working on getting 1.0.0.0 ready for the middle of July.

## Multilingual
In the multilingual department, May, will be a really active month. Here is all we're working on:
- [x] [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting) 1.0.0.0 release - A handwriting input 
   method for [ibus](https://en.wikipedia.org/wiki/Intelligent_Input_Bus)
- [ ] Cooperation with the [i18n subproject](https://madladsquad.com/untitled-desktop/subprojects/i18n) on the custom i18n  
   library for the framework
- [ ] Finishing the [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
- [ ] Rewriting the [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) to use the new 
   [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
- [ ] Creating a static site component system for [Youyin](https://youyin.madladsquad.com/) using the templating engine 
- [ ] Figuring out how to add more character data to [Youyin](https://youyin.madladsquad.com/)
- [ ] Helping the [Funtoo Linux multilingual and CJK teams](https://www.funtoo.org/Funtoo:Multilingual) with the 
   following features:
   - [x] Autogennning the Adobe SourcePro and Google Noto fonts, [FL-10383](https://bugs.funtoo.org/browse/FL-10383)
   - [x] Add a new i18n-kit and move existing multilingual applications to the new kit, 
      [FL-10436](https://bugs.funtoo.org/browse/FL-10436)
- [x] Various improvements to [Youyin](https://youyin.madladsquad.com), including codebase improvements, multiphrase support
   pinyin input when creating cards and more
      
### UntitledIBusHandwriting
The [UntitledIBusHandwriting](https://github.com/MadLadSquad/UntitledIBusHandwriting) application is a handwriting IM for 
[ibus](https://en.wikipedia.org/wiki/Intelligent_Input_Bus), similar to 
[ibus-handwrite](https://github.com/microcai/ibus-handwrite), but using the 
[hanzi-lookup](https://github.com/gugray/hanzi_lookup/) library and data provided by 
[hanzi-writer-data-youyin](https://github.com/MadLadSquad/hanzi-writer-data-youyin/). It currently looks like this:

![image](https://user-images.githubusercontent.com/40400590/235936245-1f1835aa-8ba2-4d3a-af77-f690ffd84a4f.png)
