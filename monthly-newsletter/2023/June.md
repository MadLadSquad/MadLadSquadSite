Welcome to the June 2023 edition of the monthly newsletter

## UntitledDesktop
### UntitledImGuiFramework 0.5.0.0: Part 2
The framework is still not done for release 0.5. Currently, the following features need to be finished:

- [x] Reworked build system
    - [x] Adding install statements to cmake
    - [x] Creating the multiple library layouts system
    - [x] Multiplatform build
    - [x] Static builds
    - [x] Vendored builds
- [x] Production export system
- [x] Renaming of locale module to i18n module
- [ ] Creating a custom i18n library
- [X] C API for 0.5.0.0
- [ ] Finishing the [UntitledTemplatingEngine](https://github.com/MadLadSquad/UntitledTemplatingEngine)
- [ ] Rewriting the [UVKBuildTool](https://github.com/MadLadSquad/UVKBuildTool) to use the templating engine

We estimate 0.5.0.0 that would be released around the end of July. The most meaningful features, such as the reworked build
and export system will be released by the end of June.

## Multilingual
The current tasks for the multilingual project are as follows:

- [ ] Cooperation with the [i18n subproject](https://madladsquad.com/untitled-desktop/subprojects/i18n) on the custom i18n
library for the framework
- [ ] Creating a static site component based system for [Youyin](https://youyin.madladsquad.com/) using the templating engine
- [ ] Figuring out how to add more character data to [Youyin](https://youyin.madladsquad.com/)
- [ ] Auto-genning the Adobe SourcePro and Google Noto fonts in Funtoo linux, [FL-10383](https://bugs.funtoo.org/browse/FL-10383)
- [ ] Rework the MadLadSquad website

### New MadLadSquad website
The current website is hard to navigate efficiently, which is why we decided to create a better redesign for it. This
is what it looks like right now:

![image](https://github.com/MadLadSquad/MadLadSquadSite/assets/40400590/68af2eea-a2fa-484e-b273-38933629a633)

### Additional scripts to Youyin
We're currently working on adding additional writing systems to [Youyin](https://youyin.madladsquad.com/), with the first
ones being the following:

1. [BoPoMoFo/Zhuyin](https://en.wikipedia.org/wiki/Bopomofo)
2. Latin
3. Cyrillic

Progress on this front is currently slow, as it requires a lot of manual work to modify the SVGs in a proper way. Expect Zhuyin
added to the database around the end of July.
